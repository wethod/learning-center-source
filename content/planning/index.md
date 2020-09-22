---
date: 2016-03-12T19:08:11.000+00:00
title: Planning
weight: "40"

---
## Overview

The planning has two section:

* **People Allocation** helps you to look for teammates availability,  resources allocation and check if the budget quota is respected.
* **Projects' Heatmap** shows the daily amount of people planned on each project. It also offers a _milestone system_ that allows your team to have an overview on the scheduled events.
* **Production Plan** where you can express the percentage of the project's total value you are going to produce in each month.

Everything is arranged into a six weeks calendar, you can explore past and future using the horizontal scroll or clicking on the top right arrow navigator.

The blue dot in the calendar's header highlights the current day.

## People Allocation

People Allocation gives an overview of the team’s allocation on the projects in your company. From here you can plan your colleagues, filter them by skill or tags, and access their profile pages to learn more about their backgrounds and goals.

This planning features three different views and planning options:

* **Hourly**: team allocation on projects by the hour;
* **Daily**: team allocation on projects on a daily basis;
* **Weekly**: team allocation on projects on a weekly basis. 


**People in your team**

All your teammates are listed on the left with their allocation. Each person on the list features:

* **A profile picture** or the initials;

* **Name and surname**;

* **Tags**  You can use [tags]({{< relref "settings/index.md#team" >}}) to group employees into categories.

* **Level of seniority** (i.e. JR, SR, MGR, SRMGR);

* **Objective and Key Results (OKR)** The status of the teammate's objectives and key results on each quarter of the year. Wethod shows whether the OKR of a quarter were (grey label) or were not placed (white label) by the user, and whether were discussed (blue) or checked (green) together with a sponsor;

* **Allocation on projects** Each slot shows the amount of hours, days or weeks a user is planned for a project. Each project follows the colour code of the [job order categories]({{< relref "settings/index.md/#company" >}}) used by your company. 


**Team allocation overview on a specific project**

To select a project you have two options:

1. Select the project from the “Select Project” button. Search for the project and pick it from the list. 

2. Select the project by clicking on a day/week on the plan. If the day/week features allocations on different projects, a window will open to show a list with the detail of the hours of allocation on each project. To select a project from the list, pick one and click “Select”.

Selecting a project will sort the people on the list by showing first all those who were planned on the project at least once – It’s better to work with people that are already aware of the challenge, right? 

All the time slots planned for the selected project will be highlighted throughout the plan. 


**Plan teammates on a project**

1. Select a project. 

2. Look at the box that appears at the top of the page to know how many budget days and hours are available to plan, grouped by user level.

3. If needed, you can **apply multiple filters on people**. For example, you may decide to see only the internal employees which are managers and have a background in design 
{{< img-center src="/uploads/2017/11/02/planning-people-filters.png">}}

4. You can use the search bar even to **filter people by [skill]({{< relref "settings/index.md#skills" >}})**. Try to input something like **skill:photoshop;skill:illustrator** to find everybody who has a skill named "photoshop" and a skill named "illustrator". 

5. **To plan for a day* or for an entire week***, just click on the day/week you want to allocate the user. If you hold and drag your mouse, you can assign more days/weeks at once.

*If the day/week has some hours/days already planned on other projects, wethod allows you to plan the user on the remaining hours/days available for that day/week.

6. **To plan by the hour**, hover with the mouse on the day you want to allocate the user. Click on + each time you want to plan an hour and - when you want to unplan an hour.

7. Hit the button < > on the left side of the calendar to browse people allocation in the future or in the past. Hit ‘today’ to go back at today’s planning.

{{< note title="Note" >}}

**You cannot plan people for the current day: if you don't know what you have to do when you arrive at the office, how can you be productive?**

**A project manager can plan other people on a project only if a budget exists for that project.**

{{< /note >}}


When you run out of days, you can choose between two options:

* Review the budget and wait for the approval of a supervisor.
* Quickly convert available budget days from another user level. 


### Convert available budget days from another user level

This feature allows you to quickly dispose of extra budget days, when needed, in order to allocate people on a project. 

{{< img-center src="/uploads/2020/09/09/budget_dinamico.gif">}}

You will access to a simple view of the project’s budget, including areas, tasks and the total number of available days per user level. 

Use the number of available budget days from a user-level of your choice and see on the top the conversion into budget days you can use for other user-levels. 

The conversion ratio is based on the daily cost of user-levels and it’s not possible to exceed the total amount of internal cost on the budget. 

A new version of the budget is automatically created each time a user makes a conversion.

{{< note title="Note" >}}

**You need to use all the available contingency to be able to convert days between levels.**

{{< /note >}}

## Projects' Heatmap

This is useful to show the _weight_ of planned people on each project: the darker is the color of a cell, the more people are planned on the project that day.

The color's range is made up of 10 levels from white to blue, where the darkest blue represents the most planned people on a project in a day for the visible range of time.

By clicking on a day you can:

* See who is planned on a project for the day
* See and edit the **event** related to the day: usually a project's life is fullfilled of important events, by tracking them you're giving a general point of view to all of your organization. This is also useful to avoid overlapping of two or more important events that usually need a lot of resources.

You can hide a project by clicking on the "**X**" near the project's name.

{{< note title="Note" >}}

**The heatmap is always updated based on the visible projects and date range.**

{{< /note >}}

{{< img-center src="/uploads/2017/11/15/heatmap.gif">}}

## Production Plan

Here you can express the percentage of the project's value you plan to produce for each month.

Past months are read-only and are automatically populated with the real production, based on the month's project status.
You can edit future months but remember: a production plan can be saved only if you've distributed the 100% of its value, you can easily check this by looking at the total: a red total means that your planning is someway different from 100%.

Each time you edit a past project status' week or when a month ends, the production plan for that week is recalculated in order to allocate the remaining production or to adjust inchoerent plans. The adjustments are reported as orange monthly apex.

A solid blue line indicates the project's duration, a dashed line instead tells you that the project's boundaries (the project's start/end) are outside the visible planning's portion.

Other than searching projects by name, pm or client, you can even filter them by who's in charge for them: **Mine** shows you all the projects where you're pm or account while **Others** ... well, we think you're smart enough to understand it by yourself.

If you're editing a project, you can move its whole duration or the plan for a single month by simply dragging them as shown in the GIF below. If you change a project's duration, it will be saved as soon as you click on the "save" button.

Use the "**Auto distribution**" function on a project to spread it's remaining plan on the future months of its duration.

{{< img-center src="/uploads/2019/11/18/production-plan.gif">}}

{{< note title="Note" >}}

**The production plan calendar follows ISO 8601, this means that a week belongs to a particular month only if its thursday belongs to that month**

{{< /note >}}