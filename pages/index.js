import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>ImmoFlash AI</title>
          <meta
            name="description"
            content="Our state-of-the-art platform delivers high-quality real estate seo at lightning speed, powered by advanced artificial intelligence."
          />
          <meta property="og:title" content="ImmoFlash AI" />
          <meta
            property="og:description"
            content="Our state-of-the-art platform delivers high-quality real estate seo at lightning speed, powered by advanced artificial intelligence."
          />
        </Head>
        <div className="home-navbar navbar-container">
          <div className="home-max-width max-width">
            <div className="home-logo"></div>
            <img alt="image" src="/immoflash_logo.svg" className="home-image" />
          </div>
        </div>
        <div className="home-hero hero-container section-container">
          <div className="home-max-width1 max-width">
            <div className="home-content">
              <span className="home-subtitle beforeHeading">
                immoflash Ad Compose System
              </span>
              <h1 className="home-title">
                <span>
                  Write better &amp; faster real estate ads with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text01">immoFlash AI</span>
              </h1>
              <span className="home-description">
                {' '}
                Our state-of-the-art platform delivers high-quality real estate
                seo ads at lightning speed, powered by advanced artificial
                intelligence. You&apos;re harnessing the power of AI to boost
                your sales, optimise your processes, and outpace competition.
              </span>
              <div className="home-container01">
                <button type="button" className="home-button button">
                  Join today the waitlist
                </button>
              </div>
              <span className="home-description1">
                *Only 12 spots left in pre-alpha, be the first to implement it
                inside your business 
              </span>
            </div>
            <div className="home-image1">
              <img
                alt="image"
                src="/immoflash-32tgwrvgregh53.svg"
                className="home-hero-image"
              />
              <img
                alt="image"
                src="/union-400w.png"
                className="home-graphic-top"
              />
              <img
                alt="image"
                src="/group%2018-1200w.png"
                className="home-image2"
              />
            </div>
          </div>
        </div>
        <div className="home-section section-container">
          <div className="home-max-width2 max-width">
            <div className="home-content1">
              <span className="home-text02 beforeHeading">how it works</span>
              <h1 className="home-text03">immoFlash features</h1>
              <div className="home-container02">
                <div className="home-step">
                  <div className="home-number">
                    <span className="home-text04">1</span>
                  </div>
                  <div className="home-container03">
                    <span className="home-title01">
                      AI-Powered Text Generation
                    </span>
                    <span className="home-text05">
                      The platform uses advanced AI to generate text for real
                      estate advertisements.
                    </span>
                  </div>
                </div>
                <div className="home-step1">
                  <div className="home-number1">
                    <span className="home-text06">2</span>
                  </div>
                  <div className="home-container04">
                    <span className="home-title02">Personalization</span>
                    <span className="home-text07">
                      Users can create personalized profiles for the AI to use,
                      ensuring the generated text aligns with their brand and
                      specific needs.
                    </span>
                  </div>
                </div>
                <div className="home-step2">
                  <div className="home-number2">
                    <span className="home-text08">3</span>
                  </div>
                  <div className="home-container05">
                    <span className="home-title03">
                      Scalable Content Creation
                    </span>
                    <span className="home-text09">
                      The platform can generate content for multiple listings
                      simultaneously, handling anything from a single property
                      to a large real estate portfolio.
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-container06">
                <div className="home-step3">
                  <div className="home-number3">
                    <span className="home-text10">4</span>
                  </div>
                  <div className="home-container07">
                    <span className="home-title04">
                      Customer-Centric Approach
                    </span>
                    <span className="home-text11">
                      The AI has a deep understanding of human language and can
                      produce customer-centric advertising content.
                    </span>
                  </div>
                </div>
                <div className="home-step4">
                  <div className="home-number4">
                    <span className="home-text12">5</span>
                  </div>
                  <div className="home-container08">
                    <span className="home-title05">Continual Learning</span>
                    <span className="home-text13">
                      The AI learns and adapts from each interaction, improving
                      its performance over time.
                    </span>
                  </div>
                </div>
                <div className="home-step5">
                  <div className="home-number5">
                    <span className="home-text14">6</span>
                  </div>
                  <div className="home-container09">
                    <span className="home-title06">
                      User-Friendly Interface
                    </span>
                    <span className="home-text15">
                      Our platform is designed with user experience in mind. It
                      features an intuitive, easy-to-navigate interface that
                      enables users to input their preferences and generate
                      content in just a few clicks.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section1 section-container">
          <div className="home-max-width3 max-width">
            <div className="home-content2">
              <h1 className="home-text16">Unlock Exceptional Benefits</h1>
              <span className="home-text17">
                Experience the transformative power of AI in streamlining your
                real estate advertising. Discover how our platform can save you
                time, enhance your branding, and engage your customers like
                never before.
              </span>
            </div>
            <div className="home-container10">
              <div className="home-container11">
                <div className="home-container12">
                  <span className="home-title07">Time Efficiency</span>
                  <span className="home-text18">
                    Craft multiple property descriptions swiftly, freeing up
                    your precious time to concentrate on strategic business
                    activities.
                  </span>
                </div>
                <div className="home-container13">
                  <span className="home-title08">Cost Savings</span>
                  <span className="home-text19">
                    Slash your budget on copywriting without compromising on
                    content quality - create impressive ad descriptions while
                    saving costs.
                  </span>
                </div>
              </div>
              <div className="home-container14">
                <div className="home-container15">
                  <span className="home-title09">Consistent Branding</span>
                  <span className="home-text20">
                    Regardless of the number of listings, users can maintain a
                    consistent brand voice across all their ads.
                  </span>
                </div>
                <div className="home-container16">
                  <span className="home-title10">
                    Improved Customer Engagement
                  </span>
                  <span className="home-text21">
                    Strengthen client engagement with content that speaks
                    directly to potential buyers, driving more successful
                    transactions.
                  </span>
                </div>
              </div>
              <div className="home-container17">
                <div className="home-container18">
                  <span className="home-title11">Adaptability</span>
                  <span className="home-text22">
                    As the AI refines its understanding with each use, it
                    delivers increasingly effective ad texts, enhancing your
                    advertisements&apos; impact.
                  </span>
                </div>
                <div className="home-container19">
                  <span className="home-title12">Ease of Use:</span>
                  <span className="home-text23">
                    Generate compelling real estate ad texts with minimal
                    effort, simplifying your advertising process regardless of
                    your technical expertise.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container20">
          <div className="home-banner">
            <span className="home-text24 beforeHeading">JOIN THE WAITLIST</span>
            <h1 className="home-text25">
              <span>
                Join today to outsmart the competition, save time and 
              </span>
              <br></br>
              <span>write better real estate ads</span>
              <br></br>
            </h1>
            <div className="home-btns"></div>
          </div>
          <div>
            <Script
              html={`<script charset="utf-8" type="text/javascript" src="https://js-eu1.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "eu1",
    portalId: "139812376",
    formId: "17db6cfe-918b-43eb-9fee-675ae774b02d"
  });
</script>`}
            ></Script>
          </div>
        </div>
        <footer className="home-footer">
          <div className="home-links-container">
            <span className="home-text30">
              @2023 Immoflash. All rights reserved
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar {
            height: 72px;
            align-self: center;
          }
          .home-max-width {
            align-self: center;
            justify-content: center;
          }
          .home-logo {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            width: 111px;
            height: 57px;
            object-fit: cover;
          }
          .home-hero {
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-max-width1 {
            align-items: center;
          }
          .home-content {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-subtitle {
            color: var(--dl-color-scheme-blue80);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-title {
            color: var(--dl-color-scheme-white);
            font-size: 48px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text01 {
            color: var(--dl-color-scheme-orange100);
          }
          .home-description {
            color: var(--dl-color-scheme-white);
            font-size: 17px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container01 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .home-button {
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            margin-left: 0px;
            border-width: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-description1 {
            color: var(--dl-color-scheme-white);
            font-size: 12px;
            align-self: flex-start;
            margin-top: 5px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-image1 {
            position: relative;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-hero-image {
            flex: 1;
            height: 614px;
            max-width: 550px;
            object-fit: cover;
            border-radius: 0px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          .home-graphic-top {
            top: -68px;
            right: -320px;
            width: 100%;
            height: 100%;
            position: absolute;
            max-width: 359px;
            max-height: 359px;
            object-fit: contain;
            object-position: center;
          }
          .home-image2 {
            right: -153px;
            bottom: 0px;
            position: absolute;
            object-fit: contain;
          }
          .home-section {
            padding-top: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-max-width2 {
            align-items: stretch;
          }
          .home-content1 {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .home-text02 {
            color: var(--dl-color-scheme-blue80);
            align-self: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text03 {
            font-size: 42px;
            align-self: center;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container02 {
            width: 100%;
            display: flex;
            margin-top: 20px;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-step {
            flex: 1;
            width: auto;
            display: flex;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-number {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text04 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container03 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title01 {
            color: var(--dl-color-scheme-000080);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text05 {
            color: var(--dl-color-scheme-000080);
            width: auto;
            line-height: 1.5;
          }
          .home-step1 {
            flex: 1;
            width: auto;
            display: flex;
            margin-right: Unit;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-number1 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text06 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container04 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title02 {
            color: var(--dl-color-scheme-000080);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text07 {
            color: var(--dl-color-scheme-blue80);
            line-height: 1.5;
          }
          .home-step2 {
            flex: 1;
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-number2 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text08 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container05 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title03 {
            color: var(--dl-color-scheme-000080);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text09 {
            color: var(--dl-color-scheme-blue80);
            line-height: 1.5;
          }
          .home-container06 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-step3 {
            flex: 1;
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-number3 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text10 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container07 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title04 {
            color: var(--dl-color-scheme-000080);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text11 {
            color: var(--dl-color-scheme-blue80);
            line-height: 1.5;
          }
          .home-step4 {
            flex: 1;
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-number4 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text12 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container08 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title05 {
            color: var(--dl-color-scheme-000080);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text13 {
            color: var(--dl-color-scheme-blue80);
            line-height: 1.5;
          }
          .home-step5 {
            flex: 1;
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-number5 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text14 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container09 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title06 {
            color: var(--dl-color-scheme-000080);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text15 {
            color: var(--dl-color-scheme-blue80);
            line-height: 1.5;
          }
          .home-section1 {
            padding-top: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: rgba(255, 199, 139, 0.14);
          }
          .home-max-width3 {
            align-items: stretch;
          }
          .home-content2 {
            width: 40%;
            display: flex;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text16 {
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text17 {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container10 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            flex-wrap: wrap;
          }
          .home-container11 {
            gap: var(--dl-space-space-unit);
            display: flex;
          }
          .home-container12 {
            flex: 1;
            margin: 0px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-scheme-000080);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius16);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-title07 {
            color: var(--dl-color-scheme-000080);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text18 {
            color: var(--dl-color-scheme-000080);
            width: auto;
            line-height: 1.5;
          }
          .home-container13 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            border-color: var(--dl-color-scheme-000080);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius16);
            margin-bottom: 0px;
            flex-direction: column;
          }
          .home-title08 {
            color: var(--dl-color-scheme-000080);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text19 {
            color: var(--dl-color-scheme-000080);
            width: auto;
            line-height: 1.5;
          }
          .home-container14 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
          }
          .home-container15 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            border-color: var(--dl-color-scheme-000080);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius16);
            margin-bottom: 0px;
            flex-direction: column;
          }
          .home-title09 {
            color: var(--dl-color-scheme-000080);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text20 {
            color: var(--dl-color-scheme-000080);
            width: auto;
            line-height: 1.5;
          }
          .home-container16 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            border-color: var(--dl-color-scheme-000080);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
          }
          .home-title10 {
            color: var(--dl-color-scheme-000080);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text21 {
            color: var(--dl-color-scheme-000080);
            width: auto;
            line-height: 1.5;
          }
          .home-container17 {
            gap: var(--dl-space-space-unit);
            display: flex;
          }
          .home-container18 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            border-color: var(--dl-color-scheme-000080);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
          }
          .home-title11 {
            color: var(--dl-color-scheme-000080);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text22 {
            color: var(--dl-color-scheme-000080);
            width: auto;
            line-height: 1.5;
          }
          .home-container19 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            border-color: var(--dl-color-scheme-000080);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
          }
          .home-title12 {
            color: var(--dl-color-scheme-000080);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text23 {
            color: var(--dl-color-scheme-000080);
            width: auto;
            line-height: 1.5;
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: 48px;
            flex-direction: column;
            padding-bottom: 64px;
            background-size: cover;
            background-image: url('/group%2011-1500w.png');
          }
          .home-text24 {
            color: var(--dl-color-scheme-blue80);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text25 {
            color: var(--dl-color-scheme-000080);
            font-size: 42px;
            font-style: normal;
            text-align: center;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-btns {
            flex: 0 0 auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-links-container {
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text30 {
            color: var(--dl-color-scheme-lightblue);
            margin-bottom: 0px;
          }
          @media (max-width: 991px) {
            .home-content {
              width: 50%;
              margin-right: var(--dl-space-space-unit);
              margin-bottom: 0;
            }
            .home-description {
              color: var(--dl-color-scheme-white);
              font-size: 17px;
              line-height: 1.5;
            }
            .home-container01 {
              gap: var(--dl-space-space-halfunit);
              display: flex;
              flex-wrap: wrap;
              flex-direction: column;
            }
            .home-button {
              margin-left: 0;
            }
            .home-description1 {
              color: var(--dl-color-scheme-white);
              font-size: 12px;
              line-height: 1.5;
            }
            .home-image1 {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-hero-image {
              margin-bottom: 0px;
            }
            .home-max-width2 {
              flex-direction: column;
            }
            .home-content1 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-max-width3 {
              position: relative;
              flex-direction: column;
            }
            .home-content2 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text17 {
              margin-bottom: 0px;
            }
            .home-container12 {
              width: auto;
            }
            .home-container13 {
              width: auto;
            }
            .home-container15 {
              width: auto;
            }
            .home-container16 {
              width: auto;
            }
            .home-container18 {
              width: auto;
            }
            .home-container19 {
              width: auto;
            }
            .home-footer {
              flex-direction: column;
            }
            .home-links-container {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
              flex-direction: row;
            }
          }
          @media (max-width: 767px) {
            .home-max-width1 {
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column-reverse;
            }
            .home-content {
              order: 2;
              width: 100%;
              padding-top: var(--dl-space-space-halfunit);
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .home-button {
              margin-bottom: 10px;
            }
            .home-description1 {
              margin-top: 10px;
            }
            .home-hero-image {
              margin-right: 0px;
            }
            .home-content1 {
              width: 100%;
              margin-right: 0px;
            }
            .home-container02 {
              flex-direction: column;
            }
            .home-container06 {
              flex-direction: column;
            }
            .home-content2 {
              width: 100%;
              margin-right: 0px;
            }
            .home-banner {
              padding: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-links-container {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .home-max-width1 {
              flex-direction: column;
            }
            .home-container01 {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-button {
              width: 100%;
              font-weight: 700;
            }
            .home-description1 {
              text-align: center;
            }
            .home-container02 {
              flex-direction: column;
            }
            .home-container06 {
              flex-direction: column;
            }
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
            }
            .home-links-container {
              align-items: flex-start;
              flex-direction: column;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home