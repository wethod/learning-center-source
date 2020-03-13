---
date: 2016-03-11T19:10:46.000+00:00
title: Pipeline
weight: "30"

---
## Overview

Everything starts from Pipeline, here is where opportunities and projects are listed, both of them are defined by a small amount of **significant information**:

* Name: how are you going to call it?;
* Client: for who are you going to work?;
* Value (in K): what's the estimated price to the client?;
* Percentage of external costs;
* Category: which type of project is it?;
* Probability: how likely this project is going to start?.

Pipeline has three subsections: Basket, Projects and Programs.

{{< img-center src="/uploads/2017/05/25/nav-pipeline.png" >}}

## Basket

The Basket contains all the opportunities that are not well-defined yet. You can see it as a place where to put all the ideas that you usually write on a notebook or on a Post-It.

If you add a follow up date, WETHOD will remind you when the [opportunity is expiring](/alerts/index/#expiring-opportunity).

Use the arrow to edit, delete or simply get all details about an opportunity.

{{< img-center src="/uploads/2019/12/11/basket.png" >}}

## Projects

Here you can find all the projects of the company, each project has significant information you can check and edit. Clicking on a project lets you see it in more details and actions about it.

An opportunity evolves into a Project when things get serious, in order to take this step you must have an idea about the significant information listed above.

A Project can furthermore have an invoice plan and a budget.

A project is considered **started** if it has a start date in the past or if someone has submitted timesheets for it.

A project is considered **active** when its probability reaches 90%, only when this happens it makes sense to plan for people or to do a timeheets for this project. An active project must have a job order.

{{< note title="Note" >}}
**Billable Projects must have a probability of 100%.**

**When a project status reach 0, it's a good practice to archive it.**

**When a project reach 50% of probability, it's a good practice to make a budget for it.**
{{< /note >}}

By clicking on a project you can edit its details or open its: [budget](/budget/index), [planning](/planning/index/), [reports](/reports/index/), [invoice plan](/pipeline/index/#invoice-plan).

{{< img-center src="/uploads/2017/05/25/projects.png" >}}

### Project probability

Here is a list of probabilities and their meaning:

* 0% - We lost it! Project is not going to be done
* 10% - The chances are low but maybe we can do something
* 25% - We can try it!
* 50% - I'm pretty confident we can do it!
* 75% - We are going to do it!
* 90% - We are going to do it and we now have the 'job order'
* 100% - It's all ready, we also have the 'client PO'

### Client contact

If Alice works for ACME and you're are talking with her about a possible new project, ACME is your client and Alice is your actual contact with that client. As simple as it sounds!

You can add a new contact for a client from [Clients](/finance/index/#clients) or straight from pipeline, during the project creation.

You can make the client contact a required field in your [company settings](/settings/index/#company).

### Advanced Search

If you need to search for a project, you just need to type some keywords on the search input.

If you need a more specific and advanced search, we offer you some _search query_ that can help you:

<table> <thead> <tr> <th>If you are looking for a project where:</th> <th>Type in:</th> <th>Note</th> </tr> </thead> <tbody> <tr> <td>the Name is project1</td> <td><i>project:project1</i></td> <td></td> </tr> <tr> <td>the ID is 8</td> <td><i>id:8</i></td> <td></td> </tr> <tr> <td>the Value is 25</td> <td><i>value:25</i></td> <td></td> </tr> <tr> <td>the Job Order Category is Internal</td> <td><i>type:internal</i></td> <td></td> <tr> <td>the Project Type is innovation</td> <td><i>label:innovation</i></td> <td></td></tr> <tr> <td>the Probability is 50</td> <td><i>prob:50</i></td> <td></td> </tr> <tr> <td>the Start Date is January 2016</td> <td><i>start:0116</i></td> <td>Month first</td> </tr> <tr> <td>the End Date is December 2017</td> <td><i>end:1217</i></td> <td>Month first</td> </tr> <tr> <td>the Budget Status is Draft</td> <td><i>status:0</i></td> <td>Available values: <b>0(draft)</b>, <b>1(approval)</b>, <b>2(approved)</b></td> </tr> <tr> <td>the Invoice Plan Status is manual</td> <td><i>plan:1</i></td> <td>Available values: <b>0(auto)</b>, <b>1(manual)</b></td> </tr> <tr> <td>the Client Name is wethodspa</td> <td><i>client:wethodspa</i></td> <td></td> </tr> <tr> <td>the Client PO is 30</td> <td><i>po:30</i></td> <td></td> </tr> <tr> <td>the PM Name or Surname is Luca</td> <td><i>pm:luca</i></td> <td></td> </tr> <tr> <td>the Account Name or Surname is gb</td> <td><i>account:gb</i></td> <td></td> </tr> <tr> <td>the Program Name is wethod</td> <td><i>program:wethod</i></td> <td></td> </tr> <tr> <td>the Metadata <i>tag</i> is dev or des </td> <td><i>metadata:tag=dev,des</i></td> <td></td> </tr></tbody> </table>

There are also some _search operators_, let’s have a look on them:

* If you want to search a project from **values greater than or equal** to x:    **“ x+ ”**
* If you want to search a project from **values less than or equal** to x:    **“ x- ”**
* If you want to search a project from **values greater or equal** to x **and less or equal** to y:  **“ x…y ”**
* If you want to search a project from **values not equal** to x: **“ !x ”**

You can also combine query and operators:

* Operator1 **OR** Operator2:   **“ , ”**
* Operator1 **AND** Operator2:   **“ ; ”**

For example:

* **project:wethod, php ; start:0116+ ; prob:50…75**

This search operator will find all the projects with name “wethod" or “php”, with a date start greater than January 2016 and a probability between 50% and 75%.

* **client:luca; value: 25- ; end:1217+**

This search operator will find all the projects of the client Luca, with value less or equal to 25 and with an end date in or after December 2017

* **pm:tomas, luca; prob:30…50; status:2**

This search operator will find all the project whose PM is Tomas or Luca, with a probability between 30 and 50 and a budget status which is approved.

### Invoice Plan

Here you can set a plan to emit invoices for the project. This section is basically a calendar with some additional information:

* **Plan**: the amount you plan to invoice for a given month;
* **Invoiced**: the amount actually invoiced for a given month. This is automatically updated each time you create an invoice for the project;
* **Delta**: the difference between Plan and Invoiced for a given month.

An invoice plan can be:

* **Automatic**: an invoice is automatically planned for each project's duration month, the invoice amount is obtained by dividing project's estimate by project's duration;
* **Manual**: you need to manually insert each amount you plan to invoice.

You can find the invoices (listed in your plan) in the [Invoices widget](/dashboard/index/#invoices), there they're ready to be created and sent.

### Intercompany Projects

If your company is part of a [group]({{< relref "group-setup/index.md" >}}) you have the possibility to connect a project to an [intercompany task]({{< relref "budget/index.md#make-a-task-intercompany" >}}), this makes it an _intercompany project_: its final net price and probability are updated to reflect the intercompany task’s external costs and intercompany task’s project’s probability.

To connect a project you firsty need to be invited, this can be done from inside a budget as [explained here]({{< relref "budget/index.md#make-a-task-intercompany" >}}). When you receive the invitation, just follow the link and select from the dropdown the project you want to connect.

{{< img-center src="/uploads/connect-project.png">}}

Successfully connected projects are identified by a label below their names.

{{< img-center src="/uploads/connected-project.png">}}

### Won/lost feedback

Wouldn't be great to be able to collect feedback about the reasons that led to win or lose a project?

In the [company section]({{< relref "settings/index.md#company" >}}) you can configure a set of reasons that project managers can use to describe why a project's probability went up to 90 (so the project was **won**) or down to 0 (so the project was **lost**).

When you enable the related flag for a job order category, the user will be asked for a feedback each time a project in that category gets won or lost.

{{< img-center src="/uploads/2020/01/31/won-lost-feedback.gif" >}}

## Programs

Projects are often stages or parts of something bigger, you can use a Program to group together different projects in order to see their aggregate [economic reports](/reports/index/#economics)

## Timeline

Sometimes managing your customers’ relationships can be difficult and you can easily get lost. With the timeline you can keep all your **customer relationship’s history** and everyone in your team can access it.

You can reach a project's timeline from the pipeline: choose a project, click on it and look for the timeline button in the bottom-right corner.

Add activities you think are important to remember like **calls**, **emails** and **meetings**. To every added activity you can link a **follow-up** which is nothing more than another event. A follow-up is usuallly settled in the future, so you can think of it as a sort of reminder.

The timeline gets automatically populated with some useful project's events like the creation of an order or invoice, the changes to the project value and margin, the project's first project status and a lot more.

{{< img-center src="/uploads/2020/02/01/project-timeline.png" >}}

## Project Canvas

To work well and efficiently on a project you first need to understand it and then highlight its main aspects. In WETHOD you can start "drawing" your project since its first stages by defining:

* A **brief** which explains what are the client's needs
* A **concepts** which tells how you are going to answer the client's needs
* Some **goals** that define some key metrics to measure project's success (mostly deriving from client's satisfaction)
* **Files** about your project (like documents or presentations) that you want to store and share with your team
* A set of **boards** to help you manage things to do

{{< img-center src="/uploads/2020/02/07/project-canvas.png" >}}

You can access this section from [projects]({{< relref "pipeline/index.md#projects" >}}) and basically everywhere you can see the canvas icon:

{{< img-center src="/uploads/2020/02/07/project-canvas-icon-1.png" >}}

### Files

Here you can upload/download/delete files for your projects. It's a good idea to store all assets of a project in a single place, so they can be easily found and used by all your team members, this is the perfect place.

{{< img-center src="/uploads/2020/03/13/file-storage.gif" >}}

### Boards

A board takes the form of a simplified spreadsheet where you can add and re-order columns and rows.

Columns comes in different types:

* **Text**
* **Number**
* **Status** which is basically a label with a color (don't like the default ones? Edit them!)
* **Date** which let you choose a single date or a period
* **Member** which let you choose one or more employees from your company
* **Milestone** which let you add an important event, with a type and a date

When you add a column of type *status* or *number* you automatically get a summary below the column, for a number column you can choose which kind of summary you want to see: sum, average, min or max.

You can re-order columns, rows and boards by simply drag and drop them where you prefer.

{{< img-center src="/uploads/2020/02/23/canvas-boards.gif" >}}

#### Kanban

Do you hate tables? Ya they're not this kind of friendly, so what about organizing all your tasks into cards that you can move from a list to another? You can do this by switching your view from **spreadsheet** to **kanban**: your table will be transformed into a list and no row will be harmed.

Lists are automagically created by pivoting all spreadsheet's rows on the first column of type *status* but don't worry, you can always usa another column of type *status*.

To see and edit details of a card just click on it.

You can re-order cards and lists by simply drag and drop them where you prefer.

{{< img-center src="/uploads/2020/03/04/kanban.png" >}}