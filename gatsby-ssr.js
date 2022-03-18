import React from 'react';
import { Partytown } from "@builder.io/partytown/react";

const googleTagManager = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.GOOGLE_TAG_MANAGER_ID}');
`

const gtmPixelSnippet = `
<iframe
 src="https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_TAG_MANAGER_ID}"
 height="0"
 width="0"
 style="display:none;visibility:hidden"
></iframe>
`
export const onRenderBody = ({
                                 setPostBodyComponents,
                                 setHeadComponents,
                             }) => {
    const headComponents = [
        <script
            type={'text/partytown'}
            key={'gtm-script'}
            dangerouslySetInnerHTML={{__html: googleTagManager}}
        />,
        <Partytown
            resolveUrl={(url) => {
                const proxyDomains=[
                    "www.googletagmanager.com",
                    "www.google-analytics.com"
                ]
                if (proxyDomains.includes(url.hostname)) {
                    const proxyUrl = new URL("https://cdn.builder.io/api/v1/proxy-api")
                    proxyUrl.searchParams.append("url", url)
                    return proxyUrl
                }
            }}
            forward={[
                "dataLayer.push"
            ]}
            debug={process.env.USE_PARTYTOWN_DEBUG || false}
            key={"partytown"}
        />
    ]
    const postBodyComponents = [
        <noscript
            key={'gtm-pixel'}
            dangerouslySetInnerHTML={{__html: gtmPixelSnippet}}
        />
    ]
    setHeadComponents(headComponents)
    setPostBodyComponents(postBodyComponents)
}
