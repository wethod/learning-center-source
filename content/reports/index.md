---
date: 2017-05-24T10:01:45.000+00:00
title: Reports
weight: "60"

---
## Overview

All the data you insert in WETHOD are used to generate, weekly and automatically, a set of reports useful to monitor the projects' progress.

## Project Report

Each Monday, utilising data provided by [Timesheet]({{< relref "friday/index.md#timesheet" >}}), [Project Status]({{< relref "friday/index.md#project-status" >}}) and [Budget]({{< relref "budget/index.md" >}}), a Project Report is automatically created.

### Budget Consumption / Project Status

This section shows the [budget consumption]({{< relref "glossary/index.md#budget-consumption" >}}) of the project, compared to its [progress]({{< relref "glossary/index.md#absolute-project-progress" >}}):

* If the project is **above the diagonal**: it's using a lot of days but it's progressing slowly than predictions based on budget;
* If the project is **under the diagonal**: it's using few days but it's progressing faster than predictions based on budget;
* If the project is **on the diagonal**: it's planned and managed correctly.

By analizing the saved budget versions for the project, WETHOD can shows you:

* The **baseline** which answers the question "_what would the situation be if I hadn't changed the budget since its first version_?";
* The **forecast** which answers the question _"what's the situation right now?"_;
* The **projected** which answers the question "_what will be the situation at the end of the project with the current budget consumption?"_;
* The **wasted** which answers the question "_what's the situation right now,_ [_wasted hours_]({{< relref "glossary/index.md#wasted-hours" >}}) _included?"_;

The grey dots shows you the forecast of the various past budget versions.

On the right of the graph you have:

1. **Baseline**: the first budget's hours amount;
2. The variations of the budget's hours amount since the baseline was approved;
3. [**Contingency**]({{< relref "budget/index.md#the-price-s-detail" >}});
4. **Forecast**: the current budget's hours amount (Baseline + variations + contingency);
5. A resume of the worked, planned, wasted and still available hours.

{{< img-center src="/uploads/2017/06/12/report-bc_ps.png" >}}

### Invoices & Orders

Here are listed all the [orders]({{< relref "finance/index.md#orders" >}}) and [invoices]({{< relref "finance/index.md#invoices" >}}) linked to the project, clicking on one of them will take you to the related details.

### Economics

Here is shown the trend of various [budget's]({{< relref "budget/index.md" >}}) voices for the project:

* **Revenues**: the project's final net price;
* **Internal Cost**;
* **External Cost**: the sum of all external costs, travels and expenses excluded;
* **Travels**;
* **Expenses**;
* **Gross Margin**: the difference between final net price and costs (either internal and external);
* **Wasted**: the wasted money, which is the sum of the wasted hours multiplied by the cost of their [levels]({{< relref "settings/index.md#company" >}});
* **Net Margin**: the difference between gross margin and wasted.

For each indicator you can see its value for:

* The **baseline**: first approved budget's version & current progress;
* The **forecasts**: last approved budget's version (a.k.a. current version) & current progress;
* The **projected**: last approved budget's version & progress at 100%;
* The **delta vs baseline**: difference between projected and baseline;
* The **delta vs forecast**: difference between projected and forecast.

The grey percentage under _margin_ refers to the _revenues_.

{{< img-center src="/uploads/2017/06/12/report-economics.png" >}}

### Groupwide Economics

{{< note title="Note" >}} This section is available only for companies in a Group{{< /note >}}

The groupwide economics section shows the economics of a project and all its [intercompanies]({{< relref "pipeline/index.md##intercompany-projects">}}).

Let's use an example where the company A is the "master" company and the company B is the supplier (the same can be applied to multiple suppliers).

* **Revenues**
  * Baseline: final net price of the first budget of A
  * Forecast: final net price of the last budget of A
  * As of Project Status: final net price of last budget of A based on project status percentages
  * Projected: final net price of the last approved budget of A
* **Overall Cost**
  * Baseline: sum of all costs of first budget of A and B
  * Forecast: sum of all costs of last budget of A and B
  * As of Project Status: sum of all costs of last budget of A and B based on project status percentages
  * Projected: sum of all costs of last budget if A and B based on project status percentages
* **Internal Cost of A**
  * Baseline: internal costs of the first budget of A
  * Forecast: internal costs of the last budget of A
  * As of Project Status: timesheet cost of A based on project status percentages
  * Projected: prejection to 100% of the timesheet cost of A
* **External Cost of A**
  * Baseline: external costs of the first budget of A without intercompanies value
  * Forecast: external costs of the last budget of A without intercompanies value
  * As of Project Status: external costs of the last budget of A without intercompanies value and based on project status percentages
  * Projected: external costs of the first budget of A without intercompanies value
* **Travels of A**
  * Baseline: external cost of the "Travel" task of the first budget of A
  * Forecast: external cost of the "Travel" task of the last budget of A
  * As of Project Status: external cost of the "Travel" task of the last budget of A based on project status percentages
  * Projected: external cost of the "Travel" task of the first budget of A
* **Expenses of A**
  * Baseline: external cost of the "Expenses" task of the first budget of A
  * Forecast: external cost of the "Expenses" task of the last budget of A
  * As of Project Status: external cost of the task names "Expenses" of the last budget of A based on project status percentages
  * Projected: external cost of the "Expenses" task of the first budget of A
* **Internal Cost of B**
  * Baseline: internal costs of the first budget of B
  * Forecast: internal costs of the last budget of B
  * As of Project Status: timesheet cost of the last budget of B based on project status percentages
  * Projected: prejection to 100% of the timesheet cost of B
* **External Cost of B**
  * Baseline: external costs of the first budget of B without intercompanies value
  * Forecast: external costs of the last budget of B without intercompanies value
  * As of Project Status: external costs of the last budget of B without intercompanies value and based on project status percentages
  * Projected: external costs of the first budget of B without intercompanies value
* **Travels of B**
  * Baseline: external cost of the "Travel" task of the first budget of B
  * Forecast: external cost of the "Travel" task of the last budget of B
  * As of Project Status: external cost of the "Travel" task of the last budget of B based on project status percentages
  * Projected: external cost of the "Travel" task of the first budget of B
* **Expenses of B**
  * Baseline: external cost of the "Expenses" task of the first budget of B
  * Forecast: external cost of the "Expenses" task of the last budget of B
  * As of Project Status: external cost of the task names "Expenses" of the last budget of B based on project status percentages
  * Projected: external cost of the "Expenses" task of the first budget of B

### Roadrunner Index - Days Left - Worked Hours

This three charts let you appreciate the trend of three primary indexes related with the project's progress:

* **Days Left**: data from the [Project Status]({{< relref "friday/index.md#project-status" >}}) are transposed into this chart to better highlight the weekly progress of the project;
* **Worked Hours**: data from the [Timesheet]({{< relref "friday/index.md#timesheet" >}}) are used into this chart to visualize the weekly amount of work spent on the project;
* **Roadrunner Index**: combining data from the two previous charts let us display the weekly \[**Roadrunner Index**]({{< relref "glossary/index.md#roadrunner-index-rri" >}}) for the project.

This is the only place in WETHOD where you can see the weekly details of a given project.

When worked hours grows, days left must decrease. If this doesn't happen, you have a problem: your teammates are working on something which doesn't move forward and this is highlited by a Roadrunner Index which differs from the ideal value of 1.

{{< img-center src="/uploads/2018/02/22/project-report.png" >}}

Need a more detailed view? Just click and drag on a chart to include the area you want to zoom.

{{< img-center src="/uploads/2018/02/23/rri-zoom.gif" >}}

### Hour / User

Here are reported, for each teammate who have worked to the project, the comparison between his/her worked hours and his/her planned hours.

## Consumption vs Status

This is an overview of all Projects in terms of resources and time spent on the project, allowing you to analyse their health at a glance.

For each pipeline's project, its [budget consumption]({{< relref "glossary/index.md#budget-consumption" >}}) is compared to its [progress]({{< relref "glossary/index.md#absolute-project-progress" >}}):

* If the project is **above the diagonal**: it's using a lot of days but it's progressing slowly than predictions based on budget;
* If the project is **under the diagonal**: it's using few days but it's progressing faster than predictions based on budget;
* If the project is **on the diagonal**: it's planned and managed correctly.

Using filters, you can select the Projects you want to see and explore details such as billed hours, invoiced totals, and internal and external purchase orders.

{{< img-center src="/uploads/2017/08/28/Budg-consumption-1.png" >}}

## Invoiced vs Status

This report compares the projects' status with the percentage of their value which is already been invoiced.

How to read the project's position on the graph:

* If the project is **above the diagonal**: more work days than the actually done have been invoiced;
* If the project is **under the diagonal**: not al work days done for the project have been invoiced;
* If the project is **on the diagonal**: project status and invoiced percentage are consistent, this means that until now all the work days done has been invoiced.

{{< img-center src="/uploads/2017/08/28/Revenue_Progress.png" >}}

## Sales Pipeline

This report is composed by four sections which aggregate the [revenue pipeline]({{< relref "glossary/index.md#revenue-pipeline" >}}) **by probability**, **by client**, **by project type**, **by project type's group** or **by metadata**.

Each section shows a column diagram, where each column refers to a particular year (previous, current, next) and its generated by the projects which invoice plan hits that year. Clicking on a column will show a right panel with further information linked to the column itself.

A different kind of report is the [budget breakdown]({{< relref "reports/index.md#budget-breakdown" >}}) wich shows the [company budget]({{< relref "profit-loss/index.md#" >}}) compared to the projected [revenues]({{< relref "revenues/index.md#" >}}) for the current year. The projected revenues are divided into production coming form the projects in pipeline, revenues bluesky and the remaining [delta revenue target]({{< relref "revenues/index.md#" >}}). 

### Budget Breakdown

Clicking on the subcolumn representing blueksy or delta revenue targey will show a panel listing all the grouped clients with their:

* Name;
* Pipeline value: value coming from their projects in pipeline;
* Revenue target;
* Delta: Difference between target and value;

{{< img-center src="/uploads/2021/02/19/budget-breakdown.png" >}}

### By Probability

Each column is divided into subcolumns which group projects with different probability.

Clicking on a subcolumn will show a panel listing all the grouped projects with their:

* Name;
* Client's name;
* Value;
* Probability;
* [Expected value]({{< relref "glossary/index.md#expected-value" >}}).

{{< img-center src="/uploads/2017/08/28/rev_prog-prob.png" >}}

### By Client

Clicking on a column will show a panel listing all the grouped projects with:

* Client's name;
* Value;
* Percentage of influence on the [revenue pipeline]({{< relref "glossary/index.md#revenue-pipeline" >}}).

{{< img-center src="/uploads/2017/08/28/rev_prog-client.png" >}}

### By Project Type

Clicking on a column will show a panel listing all the grouped projects with their:

* Name;
* Value;
* Percentage of influence on the [revenue pipeline]({{< relref "glossary/index.md#revenue-pipeline" >}}).

{{< img-center src="/uploads/2017/08/28/rev_prog-type.png" >}}

### By Project Type's Group

Clicking on a column will show a panel listing all the grouped projects with their:

* Name;
* Value;
* Percentage of influence on the [revenue pipeline]({{< relref "glossary/index.md#revenue-pipeline" >}}).

### By Metadata

This chart gives valuable insight only if metadata tags are used on projects or opportunities. Learn more on how to add metadata tags [here]({{< relref "settings/index.md#company" >}})

This chart is by default filtered on "No Metadata", meaning that only projects and opportunities with no metadata tags are considered.

Change filters by selecting first a metadata tag and then a metadata value.

Clicking on a column will show a panel listing all the clients (based on the filters applied) with:

* Client's name;
* Value;
* Percentage of influence on the [revenue pipeline]({{< relref "glossary/index.md#revenue-pipeline" >}}).

Items on the list are ordered by value.

## Production Value

Here you can find an overview of the annual projects' [production value]({{< relref "glossary/index.md#production-value" >}}). Each month is displayed as a two overlapped columns:

* The brilliant-green area (the lower one) represents the production value weighted on the projects' probability. So, if a project has got a production value of 100 K but a probability of 90%, it concurs with 90 K to the month's weighted production value
* The opaque-green area (the higher one) represents the gross production value that is, basically, a non weighted production value. So each project concurs with the 100% of its production value

Above the production value's chart there's the monthly [Roadrunner Index]({{< relref "glossary/index.md#roadrunner-index-rri" >}}) which aggregates the pipeline's projects' Roadrunner Indexes by month.

On the right you can see the **Resume Clock** which tells you:

* The production target, as set in [Profit&Loss Budget Target]({{< relref "profit-loss/index.md#overview" >}})
* The amount of weeks remaining until the end of the year (the grey area shows the percentage of the year gone )
* The yearly weighted production value, by clicking on this area you can access the details about the yearly production value grouped **by client**, **by project** or **by week**
* The yearly gross production value

By clicking on a specific month you can access that month's production value grouped **by client**, **by project** or **by week**.

{{< img-center src="/uploads/2018/02/23/production-value-report.png" >}}

### By Week

In this view you can see, for each project (and for the selected week):

* The [roadrunner index]({{< relref "glossary/index.md#roadrunner-index-rri" >}});
* The **lost production**: let's say people worked on a project for _A_ hours and the project progressed of _B_ hours. If _A_ is greater than _B_  you've used more hours than expected and this value gives you how much production you've lost;
* The **production value**;
* The **worked days**: how many days people have worked on the project during the selected week;
* The **progress**: how many days the project has progressed during the selected week, that is the difference between the selected week project status and the previous one;
* The **1D Value** **(Budget)**: estimated daily production value, that is "what's the expected value that must be produced for the project by day?". This is calculated by dividing the project's estimate by the project's budget days;
* The **1D Value (Actual)**: actual daily production value, that is "what's the value produced for the project by day?". This is calculated by dividing the project's production value by the project's worked days. This value is green if it's greater than _1D Value (Budget)_, red otherwise;
* The **external cost**: project's external cost percentage on the total estimate.

You can switch between month's week by using the selector placed at the top of this section.

{{< img-center src="/uploads/2018/02/22/production-value_weekly.png" >}}

## Weekly Timesheet

This is a weekly overview of the [timesheets]({{< relref "friday/index.md#timesheet" >}}) made by your teammates, each timesheet is coloured as the [job order category]({{< relref "settings/index.md#company" >}}) of the project it's linked to and you can see the project's name by clicking on its timesheet.

On the top left corner you can filter the displayed people.

On the top right corner you can change the week of the displayed timesheets.

{{< img-center src="/uploads/2017/08/28/Timesheets.png" >}}

## Timesheet Summary

This report shows all the timesheets for the selected year, grouped by Job Order Category and compared to the [Roadrunner Index](http://support.wethod.com/glossary/index.md#roadrunner-index-rri).

You can chose between monthly and weekly visualization via the selector on the top of the section, where you can also find the year selector.

{{< img-center src="/uploads/2017/08/28/RRI.png" >}}

## Project Changelog

Here are listed all the changes done on value or probability of pipeline's projects.

For each change you can see:

* The name of the project which has been changed;
* The name of the change's author;
* The change's date;
* The old value and the updated value;
* The old probability and the updated probability;
* The difference between the updated and the old [expected value](glossary/index.md#expected-value).

## Budgets Approval

Here you can find a list of all the [budget]({{< relref "budget/index.md" >}})'s approvals, each one with:

* Project's name, probability, client, account, manager, value
* Budget's version
* The person who approved the budget and the relative message, if any;
* The timestamp for the approval
* Margin's value in K
* Final net price's margin in percentage
* The difference between final net price's margin and suggested net price's margin in K and percentage. These values are highlighted in red if negative and green otherwise

{{< img-center src="/uploads/2021/02/17/schermata-2021-02-17-alle-12-33-22.png" >}}


## Project & Team Reviews Changelog

Here are listed all the [project & team reviews]({{< relref "pipeline/index.md#project-team-review" >}}) sessions requested in your company throughout a year, sorted chronologically.

Find in the list informations like:

* the name of the project for which was requested a review;
* who requested the review and when;
* the number of reviews collected since the request was sent out. This number will be green if the review is completed, red if the review is still under completion.

For each of the listed project review requests, you will be able to:

* **Resend a new review request** to the team of the project.
* **Delete it**, along with all the results collected so far.
* **Head to the project's canvas**

{{< img-center src="/uploads/2021/01/18/project-team-review-changelog.png" >}}

{{< note title="Note" >}} This section is available only if **project & team reviews** are enbabled for the company.{{< /note >}}

## Sales Overview

Here you can have a summarized view about all that projects your company won or lost during different periods of time, togheter with a bunch of reports:

* The value of the **won projects** for the client grouped by years or quarters (click on a column to further filter the insights below on the selected time range)
* Sparklines:
  * **Won projects** that are all the projects with a 90% or 1oo% probability
  * **Proposals** the number of project that reached 90% (won) or went down to 0% (lost)
  * **Avg. Project Value** the average value of all the won projects
  * **Conversion Rate** the ratio between won projects and proposals
  * **Avg. Profitabilty**: the average margin of all the won projects in the selected time range
* **Won projects** that are all the projects with a 90% or 100% probability
* **Lost projects** that are all the projects with a 0% probability
* **Outstanding projects** that are all the projects with a probability between 10% and 75%

{{< img-center src="/uploads/2020/01/24/sales-overview.png" >}}

## Backlog

This section shows production related data, let's see each chart:

{{< img-center src="/uploads/2020/01/29/backlog.png" >}}

* **Production**: shows the weekly total production for the last 52 weeks while for the future 52 it shows four charts:
  * Projection: is the produced value of the last week projected on future weeks
  * Avg Revenues: revenues target (set from: [profit&loss](http://support.wethod.com/profit-loss/index.md#)) divided by the number of the weeks in the current year
  * Planned production (Core): weekly production plan for projects with probability >= 90%
  * Planned production (Full): weekly production plan for all projects
* **Backlog**: shows the amount of production plan in your pipeline on each week of the last year
* **Weeks Backlog**: shows how many weeks of work your company needs to produce the entire backlog for each week of the last year (week's backlog / week's production).
* **Tips**: \[COMING SOON\] This section will show useful tips based on your company production, production plan and backlog

## Briefing

Briefing is content that includes all the relevant insight within your company’s production, sales, and financials, on a weekly and monthly basis.

{{< img-center src="/uploads/2020/05/14/briefing.gif" >}}

This transparent overview gives the entire team the knowledge to stay aligned on what has been done and what needs to be done in the weeks to come, in order to reach the company’s goals faster.

To collect better insights, it’s recommended to set a revenue budget/forecast for each year in the Profit & Loss section.

### Weekly Briefing

Published each Monday at 6 am, the _Weekly Briefing_ gives an insightful overview of the company’s **sales and operations** from the past week. It’s also available for each of the previous weeks.

Navigation: Insights > Briefing > Weekly

Find below a list of the insights available to read from each _Weekly Briefing._

* [**Production value**]({{< relref "glossary/index.md#production-value" >}})**,** compared with its average weekly target. The value is also compared with the one registered the same week last year. An average weekly target is basically the yearly budget/forecast divided by the number of weeks in a year.
* Projects that produced the most value.
* **Projects started** and projects that **ended** last week.
* **Sales trends**, compared with their weekly target.
* **Projects won** and their total value, compared with their target and the same week last year.
* **Pipeline value** trend over the past few weeks.
* **New opportunities**, with their total unweighted value and weighted value. A weighted value depends on the project’s percentage of success. For instance, a project valued 100K at 10% success is valued at 10K.
* The main [**reason why**]({{< relref "pipeline/index.md#won-lost-feedback" >}}) projects were lost and won.
* [**Chargeability**]({{< relref "settings/index.md#chargeability" >}}) of the week trend. This value is compared also with its target and the value of the same week last year.
* Number of **hours worked**.
* **Segmentation of hours worked**, grouped by job order category.

{{< note title="Note" >}}
**Set a revenue target for the year in the Profit & Loss section to get better insights.**
{{< /note >}}

### Monthly Briefing

Published every first Monday of the month at 6 am, this briefing gives an overview of the most important results in the company’s **sales, operations, and financials** during the past month. It’s also available for each of the previous months.

Navigation: Insights > Briefing > Monthly

Find below the insights available from each _Monthly Briefing._

* Company’s **monthly profit and loss**, including **CapEx** and **revenues per employee**. These values are also compared with the results of the previous month.
* **Production value**, with its trend over previous months and comparison with its target
* **Working day value**, compared with the value of the month before.
* **Road Runner Index** [RRI]({{< relref "glossary/index.md#roadrunner-index-rri" >}}) trend over the past months.
* **Number of hours worked** and [**Chargeability**]({{< relref "settings/index.md#chargeability" >}}) trend.
* Number of **projects won**, with their total value compared with target, and the same week last year.
* Projects that produced the most value.
* **Pipeline value,** with the trend over the previous weeks.
* **New opportunities**, with the total weighted and unweighted value. A weighted value depends on the project’s percentage of success. For instance, a project valued 100K with 10% success is valued at 10K.
* **Lost opportunities**, with the total value and the main reasons why
* **Pipeline value** trend over the past months
* [**Backlog**]({{< relref "reports/index.md#backlog" >}})

{{< note title="Note" >}}
**Set a revenue budget/forecast for the year in the Profit & Loss section to get better insights.**
{{< /note >}}

## People Insights

This section provides a series of insights on the team in your company, using the available data within the platform.

Navigation: Insights > People


### Demographics 

This page gives a demographic overview on the active population in your company. Explore trends and characteristics of your team with a sequence of charts and within a set of time ranges.

Navigation: Insights > People > Demographics

{{< img-center src="/uploads/2021/03/17/gif_demographics.gif" >}}

* **Headcount**: (in units) this chart shows the amount of active employees in your company. The information is based on the quantity of positive [payrolls]({{< relref "payroll/index.md#employees" >}}) within the shown timeframe. The forecast, which also considers the number of [placeholders]({{< relref "payroll/index.md#placeholders" >}}) in the current quarter/year, is represented with a dashed line compared to the past quarters/years. A headcount target can be added and edited from the widget’s options button.

* **In & Out**: (in units) this chart shows the number of employees hired in your company (in green) or that left your company (in red) for each quarter of the current year, in the last 3 or 5 years. The forecast, which also considers the number of [placeholders]({{< relref "payroll/index.md#placeholders" >}}) in the current quarter/year, is represented in low opacity compared to the past quarters/years.

* **Costs and revenues per employee**: (in K) this chart shows the average [costs]({{< relref "external-costs/index.md" >}}) and [revenues]({{< relref "revenues/index.md" >}}) per employee. The average is calculated taking into account the amount of employees shown as headcount for the given period of time. The forecast, which also includes the current quarter/year, is represented with a dashed line compared to the past.

* **Gender distribution**: (in units) this chart shows the gender distribution in your company. Each team member can express their gender identity from the contact information section inside their [profile page]({{< relref "settings/index.md#profile" >}}). The current quarter/year is still considered as a forecast, therefore it is represented in low opacity compared to the past quarters/years.

* **Age distribution**: (in units) this chart shows the age distribution in your company. To better digest this information, Wethod divides the population belonging to a given set of age ranges: less than 20 years old, 20-29, 30-39, 49-49, 50-59, and more than 60 years old. The current quarter/year is still considered as a forecast, therefore it is represented in low opacity compared to the past quarters/years.

* **Tag charts**: (in units) this chart(s) show(s) tags demographics which vary depending on your company’s preference. To add tags to a team member head to the [Team settings]({{< relref "settings/index.md#team" >}}), choose a tag category name and add tag names to team members. The current quarter/year is still considered as a forecast, therefore it is represented in low opacity compared to the past quarters/years.

* **Business units**: (in units) this chart shows the business unit demographics of your team. The current quarter/year is still considered as a forecast, therefore it is represented in low opacity compared to the past quarters/years.
