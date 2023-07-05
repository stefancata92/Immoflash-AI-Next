import Document, { Html, Head, Main, NextScript } from 'next/document'
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: Inter;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.15;\n    color: var(--dl-color-scheme-000080);\n    background-color: var(--dl-color-scheme-yellow20);\n    \n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="shortcut icon"
            href="/facebook_cover.png"
            type="icon/png"
            sizes="32x32"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
            data-tag="font"
          ></link>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '</noscript><!--This is the head section-->\n<!-- <script type="text/javascript"> ... </script> -->\n<script charset="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/embed/v2.js"></script>\n<script>\n  hbspt.forms.create({\n    region: "eu1",\n    portalId: "139813798",\n    formId: "6188441d-dd8b-46f4-ab3d-eb6b2fe83a51"\n  });\n</script>\n\n<style>\n\n/* animation */\n@-webkit-keyframes btnWiggle {\n  0% {-webkit-transform: rotate(0deg);}\n  2% {-webkit-transform: rotate(-1deg);}\n  3.5% {-webkit-transform: rotate(1deg);}\n  5% {-webkit-transform: rotate(0deg);}\n  100% {-webkit-transform: rotate(0deg);}\n}\n@-o-keyframes btnWiggle {\n  0% {-webkit-transform: rotate(0deg);}\n  2% {-webkit-transform: rotate(-1deg);}\n  3.5% {-webkit-transform: rotate(1deg);}\n  5% {-webkit-transform: rotate(0deg);}\n  100% {-webkit-transform: rotate(0deg);}\n}\n@keyframes btnWiggle {\n  0% {-webkit-transform: rotate(0deg);}\n  2% {-webkit-transform: rotate(-1deg);}\n  3.5% {-webkit-transform: rotate(1deg);}\n  5% {-webkit-transform: rotate(0deg);}\n  100% {-webkit-transform: rotate(0deg);}\n}\n</style>\n\n<!-- Meta Pixel Code -->\n<script>\n!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version=\'2.0\';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window, document,\'script\',\n\'https://connect.facebook.net/en_US/fbevents.js\');\nfbq(\'init\', \'165763043176317\');\nfbq(\'track\', \'PageView\');\n</script>\n<noscript><img height="1" width="1" style="display:none"\nsrc="https://www.facebook.com/tr?id=165763043176317&ev=PageView&noscript=1"\n/></noscript>\n<!-- End Meta Pixel Code --><noscript>',
            }}
          ></noscript>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <script
            type="text/javascript"
            src="https://www.googletagmanager.com/gtag/js?id=G-MM443FGS5D"
            async
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', 'G-MM443FGS5D');",
            }}
          ></script>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<script>\nwindow.onload = () => {\n  const runAllScripts = () => {\n    initializeAllAccordions()\n  }\n\n  const listenForUrlChanges = () => {\n    let url = location.href\n    document.body.addEventListener(\n      'click',\n      () => {\n        requestAnimationFrame(() => {\n          if (url !== location.href) {\n            runAllScripts()\n            url = location.href\n          }\n        })\n      },\n      true\n    )\n  }\n\n  const initializeAllAccordions = () => {\n    const allAccordions = document.querySelectorAll('[data-role=\"Accordion\"]');\n\n    allAccordions.forEach((accordion) => {\n      const accordionHeader = accordion.querySelector('[data-type=\"accordion-header\"]')\n      const accordionContent = accordion.querySelector('[data-type=\"accordion-content\"]')\n\n      accordionHeader.addEventListener('click', () => {\n        if (accordionContent.style.maxHeight) {\n          accordionContent.style.maxHeight = ''\n        } else {\n          accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`\n        }\n      })\n    })\n  }\n\n  listenForUrlChanges()\n  runAllScripts()\n}\n</script>",
            }}
          ></div>
        </body>
      </Html>
    )
  }
}
export default CustomDocument
