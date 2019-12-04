---
templateKey: blog-post
title: 'Google Analytics: Enhanced E-Commerce [Pictures] Shopify Set-Up Guide'
date: 2019-12-04T08:38:01.332Z
description: >-
  It only takes 15 mins to set-up but most even don't bother setting up and
  testing Enhanced E-commerce.
featuredpost: false
featuredimage: /img/gaicon.png
tags:
  - Tactics
---
> **Note:**
>
>  
>
> Google Analytics doesn't store data you don't tell it to. 
>
> **Meaning:**
>
>  If you realised that you made a mistake a few months down the road, you just lost a few months worth of data.

# Step 0: Removing any unintended code (Optional)

If you got an agency or a new developer to set-up your Shopify store for you, they might have accidentally added the Google Analytics snippet in the themes.

## Head over to Themes > Edit Code

![Themes> Edit Code](/img/edit-code-action.png)

## Search for Tracking Tags

Try to do a `CTRL + F` search for the following terms:

* ```
  ga.js
  ```
* ```
  dc.js
  ```
* ```
  gtag.js
  ```
* ```
  analytics.js
  ```

\[insert image]

Usually these terms are put under the "**Layout**", {/theme.liquid}



# Step 1: Google Account

Head to [Google Analytics](https://analytics.google.com/analytics/web/).

You will be prompted to login with your Google Account. (Create a Google Account if you don't have one)

## If you've used this Google Account before:

Navigate to the **Admin** tab in the bottom-left corner.

![](/img/screenshot-2019-12-04-at-5.17.30-pm.png)

## If you've haven't:

Create a new **Account** (column on the left)

![](/img/screenshot-2019-12-04-at-5.17.54-pm.png)



Set up your webpage

![](/img/screenshot-2019-12-04-at-5.18.33-pm.png)

Key in your Shopify URL and select the most relevant industry

![](/img/screenshot-2019-12-04-at-5.18.50-pm.png)



Agree to their terms

![](/img/screenshot-2019-12-04-at-5.19.21-pm.png)



You should see something like this:

![](/img/screenshot-2019-12-04-at-5.19.35-pm.png)

# Step 2: Enhanced E-commerce

Back on the main **Admin** page, look for **E-commerce Settings** under the right-most column (Users).

![](/img/screenshot-2019-12-04-at-5.21.05-pm.png)



Turn these settings on. Ignore checkout labelling

![](/img/screenshot-2019-12-04-at-5.21.48-pm.png)



# Step 3: Goals

On the same column, look for **Goals**. Select "**New Goal**"

![](/img/screenshot-2019-12-04-at-5.22.12-pm.png)

Example Goal: From blog post to checkout. Select **Destination**

![](/img/screenshot-2019-12-04-at-5.22.43-pm.png)

![](/img/screenshot-2019-12-04-at-5.24.48-pm.png)

(Skip **Blog** & **Product** if you just want to represent the last few steps)



## Step 3.1: Re-marketing (Optional)

If you ever plan to do any re-marketing, under the **Admin** > **Data collection** tab, turn these services on.

![](/img/screenshot-2019-12-04-at-5.19.59-pm.png)

## Step 3.2: Google Ads (Optional)

If you ever plan to do any Google Ads, under the **Admin** > **Google Ads Sense Linking** tab, turn these services on.

![](/img/screenshot-2019-12-04-at-5.20.08-pm.png)



# Step 4: Shopify

Remember this code snippet?

![](/img/screenshot-2019-12-04-at-5.19.35-pm.png)



Head back to your Shopify portal. Go to **Online store > Preferences.**\
In the Google Analytics section, paste your global site tag in the Google Analytics account field:

![](/img/paste-google-analytics-code-here.png)

Select the box "**Use Enhanced E-commerce**"

![](/img/google-analytics-enabled.png)



# Step 5: Testing

Go to the landing page of your website and head back to Google Analytics

![](/img/screenshot-2019-12-04-at-5.17.30-pm.png)

After a couple of seconds you should see yourself as a **"Active Users right now"**\
This means you are all set.

For more advanced testing, head to the Chrome store to use the tag assistant [here](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=en).\
Plus watch this video made by Google.

```
https://www.youtube.com/watch?v=7FXbsCWsEi8
```
