---
date: 2017-05-24 12:01:45 +0200
title: Reports
weight: 60

---
## Overview

All the data you insert in WETHOD are used to generate, weekly and automatically, a set of reports useful to monitoring the projects' progress.

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

* The **wasted** which answers the question "_what's the situation right now, [wasted hours]({{< relref "glossary/index.md#wasted-hours" >}}) included?"_;

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

### Timesheet / Project Status

This is the only place in WETHOD where you can see the weekly details of a given project. Here you can quickly appreciate the relation between **worked hours**, **days left**(taken from the project status) and [**roadrunner index**]({{< relref "glossary/index.md#roadrunner-index-rri" >}}).

When worked hours grows, days left must decrease. If this doesn't happen, you have a problem: your teammates are working on something which doesn't move forward.

### Hour / User

Here are reported, for each teammate who have worked to the project, the comparison between his/her worked hours and his/her planned hours.

## Budget Consumption

This is an overview of all Projects in terms of resources and time spent on the project, allowing you to analyse their health at a glance.

For each pipeline's project, its [budget consumption]({{< relref "glossary/index.md#budget-consumption" >}}) is compared to its [progress]({{< relref "glossary/index.md#absolute-project-progress" >}}):

* If the project is **above the diagonal**: it's using a lot of days but it's progressing slowly than predictions based on budget;

* If the project is **under the diagonal**: it's using few days but it's progressing faster than predictions based on budget;

* If the project is **on the diagonal**: it's planned and managed correctly.

Using filters, you can select the Projects you want to see and explore details such as billed hours, invoiced totals, and internal and external purchase orders.

{{< img-center src="/uploads/2017/08/28/Budg-consumption-1.png" >}}

## Revenue Progress

This report compares the projects' status with the percentage of their value which is already been invoiced.

How to read the project's position on the graph:

* If the project is **above the diagonal**: more work days than the actually done have been invoiced;

* If the project is **under the diagonal**: not al work days done for the project have been invoiced;

* If the project is **on the diagonal**: project status and invoiced percentage are consistent, this means that until now all the work days done has been invoiced.

{{< img-center src="/uploads/2017/08/28/Revenue_Progress.png" >}}

## Revenue Pipeline

This report is composed by three sections which aggregate the [revenue pipeline]({{< relref "glossary/index.md#revenue-pipeline" >}}) **by probability**, **by client** or **by project type**.

Each section shows a column diagram, where each column refers to a particular year (previous, current, next) and its generated by the projects which invoice plan hits that year. Clicking on a column will show a right panel with further information linked to the column itself.

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

Clicking on a column will show a panel listing all the grouped projects with their:

* Client's name;

* Value;

* Percentage of influence on the [revenue pipeline]({{< relref "glossary/index.md#revenue-pipeline" >}}).

{{< img-center src="/uploads/2017/08/28/rev_prog-client.png" >}}

### By Project Type

Clicking on a column will show a panel listing all the grouped projects with their:

* Client's name;

* Value;

* Percentage of influence on the [revenue pipeline]({{< relref "glossary/index.md#revenue-pipeline" >}}).

{{< img-center src="/uploads/2017/08/28/rev_prog-type.png" >}}

## Revenue Actuals

This report is composed by two sections which aggregate the already made invoices by month or by client.Each section shows a column diagram, where each column refers to a particular year (previous, current, next) and its generated by the invoices made that year. Clicking on a column will show a right panel with further information linked to the column itself.

{{< img-center src="/uploads/2017/08/28/rev_actuals.png" >}}

### By Month

Clicking on a column will show a panel listing all the months for which an invoice exists with their:

* Name;

* Invoices' value sum for that month;

* Percentage of influence on the annual invoice amount.

### By Client

Clicking on a column will show a panel listing all the clients for which an invoice exists with their:

* Name;

* Invoices' value sum for that client;

* Percentage of influence on the annual invoice amount.

## Production Value

This is an overview of the annual projects' [production value]({{< relref "glossary/index.md#production-value" >}}). By clicking on a specific month you can access that month's production value grouped **by client**, **by project** or **by week**.

{{< img-center src="/uploads/2017/06/12/production-value.png" >}}

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

## Timesheets

This is a weekly overview of the [timesheets]({{< relref "friday/index.md#timesheet" >}}) made by your teammates, each timesheet is coloured as the [job order category]({{< relref "settings/index.md#company" >}}) of the project it's linked to and you can see the project's name by clicking on its timesheet.

On the top left corner you can filter the displayed people.

On the top right corner you can change the week of the displayed timesheets.

{{< img-center src="/uploads/2017/08/28/Timesheets.png" >}}

## Timesheet Roadrunner

This report shows all the timesheets for the selected year, grouped by Job Order Category and compared to the [Roadrunner Index](http://support.wethod.com/glossary/index/#roadrunner-index-rri).

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

## Budget Changelog

Here you can find a list of all the 'budget approval' sorted chronologically.

With information as:

* Project name;

* Project probability;

* The client name;

* The manger of the project;

* The account of the project, if any;

* The timestamp of the approval;

* The value of the budget (old -> new);

* The budget margin (old -> new);

* The person who approved the budget;