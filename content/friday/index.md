---
date: 2017-05-22T13:51:35.000+00:00
title: Friday
weight: "50"

---
## Overview

WETHOD follows a weekly cycle: we think that a week is a good trade-off between the need to control the project's progress as much as possible and the need to not burden the control activities.

Every Friday an e-mail will remind:

* Each project manager to compile the Project Status for its projects;

* Each collaborator to compile the Timesheet for the projects he worked on.


## Timesheet

**Remember to insert only the real worked hours, cheating isn't useful to anybody.** The data inserted here will be used to determine the actual [budget consumption]({{< relref "reports/index.md#budget-consumption" >}}) in terms of working hours for each project.


### Weekly (default)

At the end of each week, type in here the actual hours you have spent working on the projects you are involved in. It's all really easy, fast and simple.

You can also insert some notes about the work you've done in each project. 

Each project can be pinned to find it faster later.

{{< img-center src="/uploads/2021/04/26/timesheet-weekly.png" >}}

If you want a more fine-grained control you can enable the **Daily mode**, this way you can input hours day by day.

{{< img-center src="/uploads/2021/04/26/timehseet-daily.png" >}}

When a **project is archived**, you will still be able to see the hours and notes you previously entered. However, you will **not** be able to **edit** them anymore!

If you need to make some adjustments, you can still unarchive the project while you fix your timesheet.

{{< img-center src="/uploads/2022/04/06/timesheet-archived.png" >}}

### Detailed

This kind of Timesheet allows you to:

* Compile timesheet day by day

* Do timesheet on a singular project's area. 
  The project areas will be the same as listed in the project's budget. 

* Specify between normal working hours, travel hours, overnight shifts or overtime.

* Save notes for project's area.

{{< img-center src="/uploads/2021/04/26/timesheet-detailed-overview.png" >}}

To get a quick resume about the hours distribution in the week, you just need to click on the "Hours/Week" counter.

{{< img-center src="/uploads/2021/04/26/timesheet-detailed-weekly.png" >}}

_You can enable this type of timesheet from [company settings]({{< relref "settings/index.md#company" >}})._

{{< note title="Note" >}}
**When you delete an area from a project's budget, it's timesheet's hours and notes are assigned to the "Generic" timesheet's area.**
{{< /note >}}

### Automatic 

Timesheet is automatically compiled on Sundays, based on Planning.

User can still edit this kind of timesheets, but only for past weeks. This is because wethod adds timesheet based on planning **during Sunday night**: if user would be able to edit current week timesheet, this could end up in conflicts. Consider the following scenario:

1. Project A has automatic timesheet JOC
2. There is 40 hours planned for user Joe this week
3. Joe has done only 20 hours on project A this week, so he writes 20 hours on project A timesheet and the weekend starts
4. On Sunday night wethod checks planning and sees it has to transform 40 hours of project A planning in 40 hours of timesheet
5. After doing so, Joe timesheet for the current week would be 60 hours in project A. What a mess!

_To use this type of timesheet: 
Go to “Company” from your profile, then check “Automatic Timesheet” for each desired Job Order Category”._

{{< img-center src="/uploads/2022/02/24/timesheet-auto.png" >}}

{{< img-center src="/uploads/2022/02/24/timesheet-auto-disabled.png" >}}

### Edit others

Users with _‘edit other’_ permission can also edit the timesheet of other team members.

To view their timesheet, go to the report [weekly timesheet]({{< relref "reports/index.md#weekly-timesheet" >}}), select the week you want, and go to the person details. If you click the _‘Edit timesheet’_ button, you will be redirected to their timesheet page.

You can edit your colleague’s timesheet as you usually do with your own.

A box at the top of the page will always remind you which team member you are managing at the moment.

{{< img-center src="/uploads/2022/02/22/timesheet-others.png" >}}

## Project Status

At the end of each week, the project manager estimates the workdays left to finish the project and inserts this number here. 

**Project Status must not be compiled looking at Timesheet, but thinking seriously about how much work still to be done.**

{{< img-center src="/uploads/2020/08/07/project_status_2020.png" >}}

This page shows by default a list of all the projects you are managing in your company. On the top-right corner, click on "As account" to filter the list with the project where you are in charge as account or "All" to see all of the projects in your company. 

The list of projects is divided into groups by the type of project status:

* "Workdays to complete" whether to declare the workdays left to complete a project.
* "Completed percentage" whether to declare the percentage of progress of the project.
* "Auto" whether the project status is automatic.

Set preferences in Settings > Company > Job Order Categories > Project status.


### Current production vs production plan of the month

For each project, Wethod shows the production status. It compares the current production (based on the project status) with the production planned for the current month (based on [production plan]({{< relref "planning/index.md#production-plan" >}})). 


### Edit project status by area

Click on "Edit by area" to open a window and edit the status for each of the areas (or phases) of the project, following the areas listed in the budget. The project status of the previous week is shown too, this way you can quickly compare the phase's progress.

{{< img-center src="/uploads/2020/08/07/project_status_by_area.png" >}}


### Status of the project's risk

For each project, it is possible to edit the status of risk on a weekly basis. Based on permission settings, it is possible to edit the status labels and colour from the [settings page]({{< relref"reports/index.md##project-status-settings" >}}) page.


### Budget consumption status, production trend and project details.

Click on the right arrow to access more details about a project status or to get useful insights that can help you compile it:

* A resume of the project status by area as of the previuos week Friday
* The amount of days planned for the project for the future (current week included)
* The budget consumption as of the previuos week Friday
* The progress trend for each week of the month, compared to the production plan 
* Other project details

{{< img-center src="/uploads/2020/08/07/project_status_details.png" >}}