---
date: 2017-05-24T10:09:44.000Z
title: Settings
type: ''
weight: '80'
---

## Account

Here you set your **name**, **surname** and **password**.

If you have the right permissions, you can:

* Change your invoice details;
* Import existing projects.

## Team

Since you have the right permissions, you can: **invite people**, **assign specific roles** and **allow special permissions**.

To invite a new teammate:

1. Click on the top left "**+ new user**" button;
2. Assign a *user level*, a \*role \*and the *email address* of the person you want to invite;
3. Click the "**invite**" button. Once done, an email will be sent to the given address.

You can assign up to two **tags** to each teammate, use these tags to create groups of employee. You can, for example, use a tag to describe the background of a person.

Each user can have a job title which specifies what he do (i.e. junior designer, senior developer, social media manager).

Each user can have an **allocation manager**, that is the person in the team that will receive notifications about user's allocation requests.

Being a user allocation manager does not automatically means you can approve or reject their requests, you need special permissions for that.

To set a user allocation manager:

1. Click on the "more" icon related to the user
2. Click on "Set allocation manager" menu item
3. Choose the manager from the autocomplete input
4. Click "Save" button

Any team member can be allocation manager of another team member.

![](/uploads/2017/11/02/settings-team.png)

{{< note title="Note" >}}
**Only super users can assign "super user" role.**

**Only super users can edit other super users' role.**

**If there's only one super user left, you cannot change its role.**
{{< /note >}}

#### Import Metadata

You can use this import to assign different metadata to your team members. The structure of the file is the same as the one you get from the Export Metadata. For the import to be successful you will need to follow these rules:

* the file cannot contain empty rows
* all cells under the tag columns must have one of the values that you have specified in the company settings
* you can assign more than one language (ex: Italian,English) and their corresponding level (ex:Native,C1)
* if a language is being assigned, you will need to assign also the corresponding level. Possible levels: Native, C2, C1, B2, B1, A2, A1.
* Email, Archived, Business Unit, Employee Job Titles and Employee level cannot be modified using this import

## Company

Here you can configure your company by setting:

* **User levels**: each one of your collaborators has a level which defines his daily cost to the company and the price you want to sell a day of his work to the clients. This way you can define clusters of employees like intern, junior, senior and so on. For each user level you can set a **chargeability target** – expressed in percentage – meaning as the amount of hours people belonging to a specific user level should work on profitable projects.
* **Job Order Categories**: here you can add the categories for your projects, each category needs at least a name and a color. You can change the categories' sort order by simply drag and dropping them. For each category you can set some options:
  * **Chargeable**: the projects in this category are billable
  * **Everybody can plan**: the projects in this category can be planned by everybody, not only by its pm or account
  * **Unlimited planning**: the projects in this category can be planned regardless budget availability
  * **Must be in program**: the projects in this category must be added to a [Program](/pipeline/index/#programs)
  * **Invoice driven budget**: the value of the projects on this category changes based on the total invoiced for that project. This logic also updates the Invoice Plan and the Production value. You can use this flag on all the project categories in which you are not sure of the final price because it can vary slightly based on external factors. You can then set a budget with an approximate price and let the issued invoices adjust the final price as a result of the delta between the ‘invoice plan’ and the real invoice.
  * **Capex**: the projects in this category must be treated as investments
  * **Workable**: you can switch off this option for projects used to track holidays or permits, this way timesheets done on them are not used to calculate chargeability
  * **Hours type**: you can use this option to tell if job order category's hours are:
    1\. **Workable**: (default) during this hours user is working
    2\. **Vacation time off**: the annual and usually paid time you get off work
    3\. **Leave time off**: refers to time when you can go away from your job
    4\. **Non workable**: a general time off period
  * **Plan upon approval**: you can switch on this option for projects which plan requests must be approved in order to became "effective". The only way to plan these kind of projects is by sending a plan request that is - in fact - a way of asking permission to use these projects budget
  * **Won/lost feedback**: enable to start collecting feedback about your won and lost projects. When the probability of a project in this category rise over 90 or down to zero, user will be asked to give a reason for this change
  * **Track opportunity stage**: Whether you can assign a custom stage to an opportunity or not. Please mind tracking and opportunity stage will tightly couple stage and probability attributes.
    Check the stage section for further information.
  * **Intercompany supplier**: an invoice for a project in this category cannot be sent if the project is not an [intercompany project](/pipeline/index/#intercompany-projects) or if its intercompany client does not [appear as an actual company client](/finance/index/#intercompany-client)
  * **Project status**:
    * **Work days to complete**: the project status is assigned as estimated days to complete (e.g. in order to complete we need 12 more days of work)
    * **Auto**: the progress of the projects in this category are not based on their projects status, but based on their duration (equally distributed on their lifespan indicated by date start and duration on the pipeline)
    * **Completed percentage**: the project status is assigned as a progress percentage (e.g. the progress of this project is 45%)
  * **Automatic timesheet**: here you can choose to automate the timesheets creation process for this kind of projects. This way, timesheets are automatically created each weekend based on planned hours. *Be careful: Anything can go wrong because planning is not often 100% accurate, this is why timesheet exists.* See the [timesheet section](/friday/index/#automatic) for further details.
* **Job order**: Here you can add and edit the templates used to generate new job orders.  Remember to choose which job order categories your template will be valid for, and click "Apply."  This way, when you want to add the job order to one of your projects, you will see the "Generate" button, which will automatically provide you with a job order based on this template, with a unique, sequentially created number.  A category can only be associated with one template; therefore, you will not find it available among those that can be selected in other templates.  When you add a new template, by default, it will contain a sequential number, starting with 1.  You can add as many blocks as you want by dragging and dropping them from the list at the top: enter the text you want, or the current year indication, formatted to 2 digits or 4. Once you have added the blocks, you can put them in any order you like, again by dragging them to the appropriate area of your template.  If you want the starting number not to be one (this can happen to you, for example, if you activate this automatism after you have already created some projects that follow the template you are interested in) just change the value in the block, which by default shows "1." The value you choose will be the first one suggested when a job order is generated.  If you want the job order number to restart at "1" each new year, click on "Yearly reset." In order to do this, however, you will need to have a "year" block in your template.  This value, of course, is unique to each template, and is incremented by 1 for each new job order generated. Each project will benefit from automatic job order generation depending on its job order category: if there is a template associated with its category, that will be the one used to create the job order.  To choose the number formatting, change the "Min digit padding": this is the (minimum) length that the sequential number of your job order will have.  When you have finished customizing the template, remember to save to make the changes effective and usable for your projects! Learn more about how to use this feature for your [projects](/pipeline/index/#projects).
  ![](/uploads/2023/02/06/job-order-template-settings.gif)
* **Project Metadata**:  Add a detail depth to a project in pipeline with metadata tags. Add a new tag, specify its values and check the box if required. Metadata tags are useful to reach a better insight within a single cluster of data, i.e. in the report Sales Pipeline.
* **Team Metadata**
  * You can define team metadata (tags) in this table and then assign them using the team section
  * Each metadata is composed by a category and a tag value
  * You can defined an illimitate number of categories and tags
* **Email Bot**: here you can insert the email addresses to which send invoices, orders and travel requests;
* **Project Won/Lost Bot**: here you can insert the email addresses to which send notifications each time someone of your teammates won or lost a project. A project is considered to be *lost* when its probability is 0 and *won* when its probability is 90
* **Project Types**: create and manage labels that you can assign to projects in [pipeline](/pipeline/index/#projects). A project type is basically composed by a name, you can than aggregate it's values by using a group or use a short label to better identify a project type;
* **Timesheet**: here you can choose whether to use the **simplified** or the **detailed** view. When the **simplified** view is enabled you will be able to fill your timesheet for the whole week in a single page. You can choose to fill the total amount of hours of the week or to fill worked hours daily by using the **Daily Mode** toggle. This toggle can be set as "daily" at company level, therefore for all team members, using the "Always" value in the dedicated select list. When the **detailed** view is enabled, you will be able to fill in your timesheet day by day, and also specify in which budget area your worked on. See the [timesheet section](/friday/index/#detailed) for further details. You can also set a weekly or daily reminder for your employee to fill in the timesheet. **Only users that have set timesheet as required will receive the email**. You will also be able to enable time limitation for timesheet. See the [timesheet section](/friday/index/#time-limit) for further details.
* **Project**:
  * **Required contact**: Whether the client's contact is required in order to create a Project
  * **Required Job Order**: Whether the Job Order is required for a Project to show up on Timesheet and Project Status sections
  * **Wasted Hours**: Whether the *[wasted hours](/glossary/index/#wasted-hours)* mechanism is enabled or disabled
* **Project status** This feature allows the user to edit on a weekly basis the risk status for each project.To add a new risk status click on "Add risk status", choose a colour, edit the name then click "save".
* **People allocation**:
  * **Unlimited planning**: plan without budget constraints
  * **Use 7-days week calendar**: to display Saturdays and Sundays in calendars
  * **Highlight weekends**: display Saturdays and Sundays in People Allocation using a special pattern and show a warning when user tries to allocate on these days ([learn more](/planning/index/#weekends)). This feature can be enabled only if "Use 7-days week calendar" is enabled too
* **Project opportunities** From this section you are able to create a new status or edit the existing ones. Stages can be reordered using the drag and drop and you can edit their name, color and description.The order you see in this section is the same that will be applied when ordering your opportunities by the stage column.Please mind that the default status blank can't be edited and reordered while Lost and won statuses can't have their description updated.If you deleted an opportunity stage all opportunities that were using that stage will have their stage switched to blank.Only custom stages can be deleted.Also please note that in order to assign a stage different than blank to an opportunity you have to be sure that the JOC assigned to the opportunity is tracking the opportunity status.For more information check the Job Order Category settings section.
* **Currencies**: a list of all the known currencies, each one can be made available or set as *master* (a.k.a. the currency you currently use in your company)
* **Fiscal Year**: here you can change the initial month of your company's fiscal year. All report and tables showing temporal data will update. Automatic job order generation and automatic invoice number will follow the fiscal year start, so you might get duplicated job order or invoice number if you change it. Remember that you can always manually change them and also set a different progressive number to start with in the job order settings than the default 1.
* **Won/Lost Feedback**: here you can define some possible reasons which can led to the win or loss of a project. A project is considered **won** when its probability reaches 90 or above, on the other hand it's considered **lost** when it goes down to 0. Users will be able to choose one of these reasons from the projects pipeline (remember to enable the related job order category's flag). This feedbacks will be then shown on the [Client Details](/finance/index/#client-details) page and can be edited from the "More Action > Edit Feedback" button in the projects pipeline.
* **Project & Team Review** where you can:
  * Enable/disable [Project & Team Review](/pipeline/index/#project-team-review)
  * Choose the review mode, you can select between a partial or a 360° team review, whether the team should be able to review just the project and its manager or the project and all team members (incl. the manager).
  * Allow to submit incomplete project or team review, when the user has insufficient evidence to vote a specific criterion.
  * Add or edit criteria in order to evaluate projects and team members. The reviewer will be asked to express a rate for each of the chosen criteria
  * Set a minimum number of unique reviewers to collect feedback from before showing review’s results in the profile page and the project canvas (this is useful to keep a review anonymous)
  * Decide for which job order categories and minimum project's value WETHOD will ask for review on archive.
* **Suppliers settings**
  * **Categories and subcategories of suppliers**
    This feature allows the user to visually browse the list of suppliers and filter suppliers by category or subcategories. To set categories and subcategories for your suppliers (i.e. Hospitality - Catering) start with categories. Click on "new category", add a name and assign a colour of your choice and hit "save". Eventually, for each category it is possible to add subcategories and save them.
  * **Status of suppliers**
    This feature allows the user to determine a status of a supplier and if it is eligible for contracts or not. To set status for your suppliers hit the button "Enable". Once the feature is enabled, hit "New status", add a name for your status, assign a colour of your choice and put a check if suppliers with this status will be available for contracts. Remember that a user can issue an order only to suppliers that are available for contracts.
* **Expenses**: manage [categories of expenses](/finance/index/#set-a-category-of-expense)
* **Bank accounts**: set the list of bank accounts available for invoicing matters in your company. To each one, you can associate a name and an IBAN code. You can then select for each of your [clients](/finance/index/#client-list) the appropriate bank account usually used for payments.
* **VAT rates**: set the list of VAT rate options that may be applied to an invoice. To each one, you can associate a short label (to easily recognize it), the rate and a more complete description of it. You can then select for each of your [clients](/finance/index/#client-list) the appropriate VAT rate usually used for invoicing.
  **Split payment for VAT**: In some cases, legislation in Italy requires that when a state-owned company pays for an invoice, it pays VAT directly to the tax authority and the net amount to the supplier of goods and services. Suppliers must display the split amounts on the documents they issue to the client.
* **Payment terms**: manage all the types of payment terms agreed with your clients for invoicing matters. Associate a name and specify when the payment should be issued: is it 30 net days after the issue of the invoice or is it 30 net days (end of the month)?
* **Company Order Plan View**: here you can set your preferences about the way you want to visualise the company yearly orders, in the Company Order Plan page. Check [here](/order-plan/index/#overview) to see how this setting affects the visualisation of data.
* **Job titles**: [can be used in a budget](/budget/index/#job-titles) to better specify a job figure or position needed to complete a task, for example: to complete task “Website redesign” you may need a junior designer and a senior developer, these are two distinct job titles related to junior and senior user level respectively. Each person in your team can be assigned a job title, this makes it possible to filter people by job title in the [People Allocation section.](/planning/index/#people-allocation) A job title cannot be deleted, it can only be archived. A job title is related to a single user level and this level can be chosen only during job title creation.
* **Google Drive Sync**: manage [Google Drive integration with project canvases](/pipeline/index/#sync-with-google-drive). To enable this integration you will be prompted to allow wethod access to your Google Drive and you will need to choose a folder inside one of your shared drives to use as root for all the files to keep in sync. This functionality works by sharing the selected root folder with wethod, so it can create folders and upload files in the place of the user. In order for this to work, you need to be sure to have enough Google Drive permissions to share the selected root folder with someone else (**Manager** or **Content manager**). When the integration is enabled, you can:
  * See the **root folder** you have chosen
  * See the **canonical path** used to link a project to its Google Drive folder. For a project "New website" with client "ACME" and job order "1234" the canonical path will be *root folder > ACME > New website - 1234*, all the canonical path components are Google Drive folders ("New website - 1234" is a single folder)
  * Choose which job order categories need to be kept in sync
  * Add **default folders** to create automatically each time a new Google Drive project folder is created

![](/uploads/2022/03/09/drive-canvas-enable.gif)

## Alerts Engine

Here you can manage the [alerts](/alerts/index) for your company, for each alert you can: enable/disable it, change its priority and edit its parameters (if required).

![](/uploads/2018/03/27/alert-engine.png)

Changing an alert's priority is as simple as positioning your cursor on the current priority and click on the new one:

![](/uploads/2018/03/27/alerts-engine_edit-priority.gif)

## Permissions

Here you can set permissions for the various user's role:

* **Budget, Invoices, Orders, Pipeline, Planning, Project Status, Timesheet**: who can do what;
* **Dashboard**: which widgets are available to who;
* **Header**: which section of WETHOD are available;
* **Reports**: which sections of \*Reports \*are available;
* **Settings**: who can access *Settings*.

{{< note title="Note" >}}
**Only super users can access Permissions page.**

**Super user settings' permissions cannot be changed.**
{{< /note >}}

*Here the word "other" means "of his/her teammates". For example: in the budget table, "view other" means "view his/her teammates budget".*

*The roles "Account" and "PM" are dynamic: you can assign them only from a project.*

To create a new role:

1. Click on the top left "**+ add role**" button;
2. Assign a name to the newly created role;
3. Click the "**save**" button.

{{< note title="Note" >}}
**You cannot create two roles with the same name.**
{{< /note >}}

## Profile

A place where you can introduce yourself to the people of your team.

Your portfolio is made up of different information, let's explore them.

### Profile pic & basic information

Here you can just edit your profile pic, for the other information please refer to the relative section:

* Your name can be edited from the [account section](/settings/index/#account)
* Your tags and your level can be edited from from the [team section](/settings/index/#team) if you have the right permissions

### Contact information

In which way people can contact you? Add a phone number, a Skype username and even a LinkedIn account if you want.

### Skills

What are your secret weapons? When adding a skill you can pick from the list a skill already used from another person of your team, otherwise don't be afraid to create a new one.

*When a skill is not used anymore, it will automatically be deleted.*

### Interests

Got any hobby or passion? When adding an interest you can pick from the list of interests already used from another person of your team, otherwise don't be afraid to create a new one.

*When an interest is not used anymore, it will automatically be deleted.*

### Short Bio

Just a brief presentation about yourself.

### Languages

How many languages do you know? List them and choose a level for each one.

*Levels are based on the* *[Common European Framework of Reference for Languages (CEFR)](https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages)*

### Portfolio

All the projects you are proud of.

### OKR, Sponsorships & Year Resolution

OKR is an abbreviation for **Objective and Key Result**, a
technique for defining and tracking objectives used by companies like Google, Uber and Twitter. Every person in your team is prompt to define some objectives for each quarter of the year, an objective is made up of key results. A key result is an expectation whose progress can be quantitatively measured and scored, completing all the key results of an objective means that you have completed that objective too.

A common way to decide which objectives are really meaningful for your personal growth and for your company is discussing them with a **sponsor**: a person in your team that you want to take as a mentor.

*To select a sponsor just pick it from the list you see by editing the "Sponsored by" section. All the people that have chosen you as sponsor will appear in the "Sponsor of" section.*

You can use the **year resolution** to sum up the meaning of all your objectives.

Want to learn more about OKR? Take a look at this [good article](https://medium.com/startup-tools/okrs-5afdc298bc28).

![](/uploads/2019/02/06/okr.gif)

For every quarter you can set a **status** based on how the discussion about that quarter's OKR is going:

* *Draft* if the OKR isn't completely defined yet
* *Discussed* if all the objectives have been discussed and approved by your sponsor. From this step on, you can just edit the Key Results progress
* *Checked* if quarter ends and your sponsor positively evaluated your progress. In this step you are no more able to edit the quarter's OKR

![](/uploads/2019/05/21/objective-quarter-status.png)

### Trends

Here you can find some reports about the user's behaviour, each report is obtained by using a [moving average](https://en.wikipedia.org/wiki/Moving_average) of the last 3 or 12 months' available data.
For each report you can appreciate:

* The **general trend**, identified by the line's color: red if the last point you see is worst than the first one, green otherwise
* The **last available value**, identified by the marker's color. The meaning of the color is explained in the chart's legend

#### Fridayness

The days of delay in compiling [timesheet](/friday/index/#timesheet) and [project status](/friday/index/#project-status): the more you wait to compile them, the more your report goes up.

Timesheet and project status are meant to be compiled on Friday (this is why they are placed under the Friday section 😉); if you compile them on Saturday you get a +1 day on the report, if you compile them on Sunday you get a +2 days on the report and so on.

Automatic timesheet is added by wethod on Sunday night, this means all users with planning on this kind of projects will see their Fridayness counter going up even if they can do nothing about it. To avoid this, projects from JOC with automatic timesheet are removed from Fridayness calculation.

![](/uploads/2019/02/20/fridayness.png)

#### Chargeability

The percentage of timesheet done on chargeable projects. The dashed line is useful to understand how teammates with the same level are doing. Do you work for money or for glory?

![](/uploads/2019/02/20/chargeability.png)

#### Do The Production Plan

The percentage of [production plan](/planning/index/#production-plan)'s correction accumulation: when you edit a project status in the past or when a new month starts, the production plan is recalculated in order to find possible mismatches between the production you planned and the actual production.

The adjustments (or accumulation) are reported as orange monthly apex and are used to compute the moving average for this chart. So, how accurate is your production planning?

![](/uploads/2019/02/20/do-the-plan.png)

#### Keep The Lights Off

[Alerts](/alerts/index) are made to be solved and this report shows how many days you take to solve yours (on average).

![](/uploads/2019/02/20/keep-the-lights-off.png)

#### Do The Budget

The difference, in terms of margin, between [budget](/budget/index)'s baseline and budget's last approved version. Only finished project (that is projects archived with probability equal to 100%) are taken into account.

![](/uploads/2019/02/20/do-the-budget.png)

### Working Connections

Here you can appreciate the connections between project's manager, type and client of timesheet you have done in the last 12 months, position your cursor over a link or a rectangle to get more information.

By clicking on a rectangle you can highlight all the outgoing connections and clicking on a connection let you see all the projects involved in that connection.

![](/uploads/2019/02/20/working-connections.gif)

### Kudos

Each team member has a section in the profile page, called Kudos, with the results of the [reviews](/pipeline/index/#project-team-review) received in a year both as a team member and as a project manager. The widget "What people say" collects all the written reviews received in a year.

![](/uploads/2020/06/30/profile-kudos.png)

These results are based on the average Net Promoter Score and are calculated considering the number of reviews received and the projects worked on in a year.

The average Kudos of a project are shown on the project’s canvas page, with the average result for each criterion.

## Switch Company

If you have a different WETHOD company linked to the same account, from here you can switch from one another.

## Business Unit

The “Business Unit” module is useful to manage teams that work as independent operational units. From settings, you can enable the module, set the business units and specify some default behaviours. Once the module is enabled, it allows to associate projects, team members and insights with the business units in your company.

**Default BU for filters**: “User’s BU” or “All”. Choose whether to show the users data from the whole company or from the BU they're belonging to as a default.

![](/uploads/2020/07/10/business-unit-settings.png)

### Projects' Business Unit

To assign a business unit to a project you can go to project list, find your project and click on “Show more”. Click on the field named “Business Unit” and select an option from the list.

![](/uploads/2020/07/10/business-unit-pipeline.png)

### Team members' Business Unit

Wethod keeps a record of each time a user changes its business unit. All the data coming from previous planning and timesheet will remain linked to the business unit(s) the user belonged to at the time. To assign a business unit to each of the employees head to the [payroll section](/payroll/index/#overview).

![](/uploads/2020/07/10/business-unit-payroll.png)

### Business Unit Filters

When the Business Unit module is enabled you will find filters in all sections of the application where it’s necessary a view by business unit. Do you think it’s missing a filter in a specific section or page in wethod? [Please, contact us](mailto:info@wethod.com).

![](/uploads/2020/07/10/business-unit-filters.png)

### Planning Cross-Business unit

In the permissions settings you set whether a user in a business unit is allowed to plan people from other business units:

* **same-bu people on inter-bu projects**: whether you can plan people from your business units on projects of other business unit.
* **inter-bu people**: whether you can plan people of other business unit (to projects of all business units).

## Products

You can find this section in the app menu under *Projects > Toolbox > Products*.

![](/uploads/product-creation.png)

A product is a special kind of [pre-compiled budget task](/budget/index/#products), representing an activity requiring well-known man-days and costs.

For example let’s say that a digital agency knows that its best-selling event needs 2 days and 1000 € to be organized and delivered, instead of recreating this task for each client, the agency can create a single product and add it to different budgets when needed.

A product has:

* Name
* Description
* From - To: specify a period of time during which product is available to be added to a budget.
  * If only “From” is specified then product is available starting from that date
  * If only “To” is specified then product is available from its creation until the date specified by “To”
  * If “From” and “To” are not specified then product is always available
* Days: man-days needed for every user level in order to ship the product
* External costs: costs needed to ship the product
* Markup: percentage of markup applied on external cost to calculate the price
* Price: price of a single instance of the product. If not defined it's calculated  based on man days cost, external cost, markup and quantity

Specific [permissions](/settings/index/#permissions) let you control who can view or edit this section.

Only “From” and “To” attributes can be edited, they can be used to change availability of a product after its creation.

If a user creates a product with a markup and a price, the markup is not used to calculate the price because the user-specified price is used instead.

## Pricelists

You can find this section in the app menu under *CRM > Toolbox > Pricelists*.

![](/uploads/pricelists-create.png)

A pricelist defines a group of level daily rates that can be used to [adapt a project price in a budget](https://support.wethod.com/budget/index/#pricelists).

For example, you can define a pricelist named “USA” and a pricelist named “Europe”: the first will specify level rates to use for project based in the United States and the other will do the same for projects based in Europe.

Each company has a company default pricelist which defines company levels default daily rates. This pricelist is marked with a "default" label and has a light blue background.

You can't choose the company default pricelist, you can only edit its attributes.

A pricelist might be reserved to a client, this means that it can be associated only to budgets related to that specific client.

Each client can have several pricelists related to it.

For all pricelists associated to a specific client, at most one can be elected as default pricelist for that client: this is the special pricelist automatically associated to new created budgets for the specific client. Default client pricelists are marked with a "default" label.

If no client default pricelists exist for a project client, the company default pricelist will be used.

A company default pricelist cannot be used as client pricelist.

If you edit a pricelist used in a budget, changes become effective the next time that budget will be taken back to draft.

When a client is deleted, all pricelists related to it become "normal" pricelists and therefore can be used in any budget.

A pricelist has:

* Name
* Description
* From - To: specify a period of time during which pricelist can be used in a budget
  * If only “From” is compiled then product is available starting from “From”
  * If only “To” is compiled then product is available from its creation until the date specified by “To”
  * If “From” and “To” are not specified then product is available from its creation
* Rates: daily rates for every user level
* Client

Specific [permissions](https://support.wethod.com/settings/index/#permissions) let you control who can view or edit this section.
