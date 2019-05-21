---
date: 2017-05-24T10:09:44.000+00:00
title: Settings
weight: "80"

---
## Tutorial

From here you can access a quick and clear tutorial that will teach you all the secrets behind WETHOD, but remember: **with great power comes great responsibility.**

Clicking on "**let me try**" will pause the tutorial and let you take a look around, to resume the tutorial just click on the bottom right button.

Clicking on "**skip tour**" will close the tutorial.

## Account

Here you set your **name**, **surname** and **password**.

If you have the right permissions, you can:

* Change your invoice details;
* Import existing projects.

## Team

Since you have the right permissions, you can: **invite people**, **assign specific roles** and **allow special permissions**.

To invite a new teammate:

1. Click on the top left "**+ new user**" button;
2. Assign a _user level_, a *role *and the _email address_ of the person you want to invite;
3. Click the "**invite**" button. Once done, an email will be sent to the given address.

You can assign up to two **tags** to each teammate, use these tags to create groups of employee. You can, for example, use a tag to describe the background of a person.

{{< img-center src="/uploads/2017/11/02/settings-team.png">}}

## Company

Here you can configure your company by setting:

* **User levels**: each one of your collaborators has a level which defines his daily cost to the company and the price you want to sell a day of his work to the clients. This way you can define clusters of employees like intern, junior, senior and so on;
* **Job Order Categories**: here you can add the 'categories'of you projects, choosing a color, a name and various opsions such as:
  * **Chargeable**: the projects in this category are billable
  * **Everybody can plan**: the projects in this category can be planned by everybody, not only by its pm or account
  * **Unlimited planning**: the projects in this category can be planned regardless budget availability
  * **Must be in program**: the projects in this category must be added to a \[Program\]({{< relref "pipeline/index.md#programs" >}})
  * **Invoice driven budget**: the value of the projects on this category changes based on the total invoiced for that project. This logic also updates the Invoice Plan and the Production value. You can use this flag on all the project categories in which you are not sure of the final price because it can vary slightly based on external factors. You can then set a budget with an approximate price and let the issued invoices adjust the final price as a result of the delta between the ‘invoice plan’ and the real invoice.
  * **Capex**: the projects in this category must be treated as investments
  * **Project status**
    * **Estimate to complete**: the project status is assigned as estimated days to complete (e.g. in order to complete we need 12 more days of work).
    * **Time based progress**: the 'progress' of the projects in this category are not based on their 'projects status', but based on their duration (equally distributed on their lifespam indicated by date start and duration on the pipeline).
    * **Project status as progress**: the project status is assigned as a progress percentage (e.g. the progress of this project is 45%).
* **Email Bot**: here you can insert the email addresses to which send invoices and orders;
* **Project Won/Lost Bot**: here you can insert the email addresses to which send notifications each time someone of your teammates won or lost a project. A project is considered to be _lost_ when its probability is 0 and _won_ when its probability is 90;
* **Project Types**: create and manage labels that you can assign to projects in \[pipeline\]({{< relref "pipeline/index.md#projects" >}}). A project type is basically composed by a name, you can than aggregate it's values by using a group or use a short label to better identify a project type;
* **Timesheet**: here you can choose to automate the timesheets creation process. This way, timesheets are automatically created each Friday based on planned hours. _Be careful: Anything can go wrong because planning is not often 100% accurate, this is why timesheet exists._

## Alerts Engine

Here you can manage the \[alerts\]({{< relref "alerts/index.md">}}) for your company, for each alert you can: enable/disable it, change its priority and edit its parameters (if required).

{{< img-center src="/uploads/2018/03/27/alert-engine.png">}}

Changing an alert's priority is as simple as positioning your cursor on the current priority and click on the new one:

{{< img-center src="/uploads/2018/03/27/alerts-engine_edit-priority.gif">}}

## Permissions

Here you can set permissions for the various user's role:

* **Budget, Invoices, Orders, Pipeline, Planning, Project Status, Timesheet**: who can do what;
* **Dashboard**: which widgets are available to who;
* **Header**: which section of WETHOD are available;
* **Reports**: which sections of *Reports *are available;
* **Settings**: who can access _Settings_.

_Here the word "other" means "of his/her teammates". For example: in the budget table, "view other" means "view his/her teammates budget"._

_The roles "Account" and "PM" are dynamic: you can assign them only from a project._

To create a new role:

1. Click on the top left "**+ add role**" button;
2. Assign a name to the newly created role;
3. Click the "**save**" button.

## Profile

A place where you can introduce yourself to the people of your team.

Your portfolio is made up of different information, let's explore them.

### Profile pic & basic information

Here you can just edit your profile pic, for the other information please refer to the relative section:

* Your name can be edited from the \[account section\]({{< relref "settings/index.md#account" >}})
* Your tags and your level can be edited from from the \[team section\]({{< relref "settings/index.md#team" >}}) if you have the right permissions

### Contact information

In which way people can contact you? Add a phone number, a Skype username and even a LinkedIn account if you want.

### Skills

What are your secret weapons? When adding a skill you can pick from the list a skill already used from another person of your team, otherwise don't be afraid to create a new one.

_If a skill is used by nobody, it will automatically be deleted._

### Short Bio

Just a brief presentation about yourself.

### Languages

How many languages do you know? List them and choose a level for each one.

_Levels are based on the_ [_Common European Framework of Reference for Languages (CEFR)_](https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages)

### Portfolio

All the projects you are proud of.

### OKR, Sponsorships & Year Resolution

OKR is an abbreviation for **Objective and Key Result**, a
technique for defining and tracking objectives used by companies like Google, Uber and Twitter. Every person in your team is prompt to define some objectives for each quarter of the year, an objective is made up of key results. A key result is an expectation whose progress can be quantitatively measured and scored, completing all the key results of an objective means that you have completed that objective too.

A common way to decide which objectives are really meaningful for your personal growth and for your company is discussing them with a **sponsor**: a person in your team that you want to take as a mentor.

_To select a sponsor just pick it from the list you see by editing the "Sponsored by" section. All the people that have chosen you as sponsor will appear in the "Sponsor of" section._

You can use the **year resolution** to sum up the meaning of all your objectives.

Want to learn more about OKR? Take a look at this [good article](https://medium.com/startup-tools/okrs-5afdc298bc28).

{{< img-center src="/uploads/2019/02/06/okr.gif">}}

For every quarter you can set a **status** based on how the discussion about that quarter's OKR is going:

* _Draft_ if the OKR isn't completely defined yet
* _Discussed_ if all objectives has been discussed and approved by your sponsor. From this step on, you can just edit KR's progress
* _Checked_ if quarter ends and your sponsor positively evaluated your progress. In this step you are no more able to edit the quarter's OKR

{{< img-center src="/uploads/2019/05/21/objective-quarter-status.png">}}

### Trends

Here you can find some reports about the user's behaviour, each report is obtained by using a [moving average](https://en.wikipedia.org/wiki/Moving_average) of the last 3 or 12 months' available data.
For each report you can appreciate:

* The **general trend**, identified by the line's color: red if the last point you see is worst than the first one, green otherwise
* The **last available value**, identified by the marker's color. The meaning of the color is explained in the chart's legend

#### Fridayness

The days of delay in compiling \[timesheet\]({{< relref "friday/index.md#timesheet" >}}) and \[project status\]({{< relref "friday/index.md#project-status" >}}): the more you wait to compile them, the more your report goes up.

Timesheet and project status are meant to be compiled on Friday (this is why they are placed under the Friday section 😉); if you compile them on Saturday you get a +1 day on the report, if you compile them on Sunday you get a +2 days on the report and so on.

{{< img-center src="/uploads/2019/02/20/fridayness.png">}}

#### Chargeability

The percentage of timesheet done on chargeable projects. The dashed line is useful to understand how teammates with the same level are doing. Do you work for money or for glory?

{{< img-center src="/uploads/2019/02/20/chargeability.png">}}

#### Do The Production Plan

The percentage of \[production plan\]({{< relref "planning/index.md#production-plan" >}})'s correction accumulation: when you edit a project status in the past or when a new month starts, the production plan is recalculated in order to find possible mismatches between the production you planned and the actual production.

The adjustments (or accumulation) are reported as orange monthly apex and are used to compute the moving average for this chart. So, how accurate is your production planning?

{{< img-center src="/uploads/2019/02/20/do-the-plan.png">}}

#### Keep The Lights Off

\[Alerts\]({{< relref "alerts/index.md" >}}) are made to be solved and this report shows how many days you take to solve yours (on average).

{{< img-center src="/uploads/2019/02/20/keep-the-lights-off.png">}}

#### Do The Budget

The difference, in terms of margin, between \[budget\]({{< relref "budget/index.md" >}})'s baseline and budget's last approved version. Only finished project (that is projects archived with probability equal to 100%) are taken into account.

{{< img-center src="/uploads/2019/02/20/do-the-budget.png">}}

### Working Connections

Here you can appreciate the connections between project's manager, type and client of timeheets you have done in the last 12 months, position your cursor over a link or a rectangle to get more informations.

By clicking on a rectangle you can highlight all the outgoing connections and clicking on a connection let you see all the projects involved in that connection.

{{< img-center src="/uploads/2019/02/20/working-connections.gif">}}

## Switch Company

If you have a different WETHOD company linked to the same account, from here you can switch from one another.