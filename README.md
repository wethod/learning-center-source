# learning-center-source
Here you can find all the files __needed to build__ the site "WETHOD Learning Center". 
## Details
* The site is statically generated using [Hugo](https://gohugo.io/);
* The site is hosted on [GitHub Pages](https://pages.github.com/) with a custom domain at http://support.wethod.com;
* If you need a visual editor and/or a simple CMS, you can use [Tina CMS](https://app.tina.io/);
* The served files are in [another repo](https://github.com/wethod/wethod.github.io). We need to maintain different repositories for source code and served files because of how github pages works;
* The __FAQ__ section embed the [Responsa](https://goresponsa.com/) In-Page widget;
* The __search__ functionality is obtained by using [Algolia DocSearch](https://community.algolia.com/docsearch/).
## How to edit 
Using Tina CMS:
1. Login with the WETHOD account;
2. In the section "Projects" choose "wethod-support";
3. Edit content;
4. Refresh the github.io page (clearing cache using `⌘ + MAIUSC + R`) to see the changes.

Manually:
1. Clone this repository;
2. Edit content;
3. Push the changes;
4. The github actions will detect new commits to this repository and will auto-deploy the site;
5. Refresh the github.io page to see the changes.

## Build
Source files contained in this repo are automatically build and published in [another repo](https://github.com/wethod/wethod.github.io) using a [GitHub Action](https://github.com/wethod/learning-center-source/actions?query=workflow%3A%22Hugo+build+%26+publish%22), this  action is triggered by a push in the master branch.

## Good to know
In `templates.ts` you can find useful [templates](https://tina.io/docs/reference/templates/) that enhance Markdown's capabilities.
This allows you to add custom fields which can be used in your pages.

For example, the __note__ template gives you the ability to insert a blue banner embedding it in your Markdown:
```
{{< note title="Title of the banner" >}}
Text you want to show inside the banner.
You can also use **custom style**.
{{< /note >}}
```
