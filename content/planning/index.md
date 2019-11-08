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

On the top you have three buttons, from the left:

* The **select project** button lets you search for a project and pick one from the list;
* The **filter people** button lets you filter the teammates you want to see in the planning;
* The **switch weeks** button lets you travel in time, you can see future and past weeks.

When you select a project, only the half-days allocated for that project will be highlighted, this allows you to have a general point of view on the teammates which are already on the project.  For the same reason, selecting a project will sort people by showing first all those who were planned on the project at least once. Because is better to work with people that are aware of the challenge, right?

To know how many budget days you can allocate just look at the box that appears at the top of the page: here you can see all the days left, grouped by user level.

All your teammates are listed on the left, to allocate a person you just need to click on the half-day you want to assign. If you hold and drag your mouse, you can assign more half-days at once.

You can plan a person by half-days: we think it's not worth planning by more fine-grained amounts of time. If your tasks require less time, just group them!

{{< note title="Note" >}}

**You cannot plan people for the current day: if you don't know what you have to do when you arrive at the office, how can you be productive?**

**A project manager can plan other people on a project only if a budget exists for that project.**

{{< /note >}}

{{< img-center src="/uploads/2017/11/02/planning-people.gif">}}

The **filter people button** lets you combine different filters, for example you may decide to see only the internal employees which are managers and have a background in design (you can use [tags]({{< relref "settings/index.md#team" >}}) to divide employees into categories).

{{< img-center src="/uploads/2017/11/02/planning-people-filters.png">}}

You can use the search bar even to filter people by [skill]({{< relref "settings/index.md#skills" >}}), try to input something like **skill:photoshop;skill:illustrator** to find everybody who has a skill named "photoshop" and a skill named "illustrator".

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

Each time you edit a past project status' week, the production plan for that week is recalculated in order to allocate the remaining production or to adjust inchoerent plans. The adjustments are reported as orange monthly apex.

A solid blue line indicates the project's duration, a dashed line instead tells you that the project's boundaries (the project's start/end) are outside the visible planning's portion.

{{< img-center src="/uploads/2019/06/19/prod-plan.png">}}

{{< note title="Note" >}}

**The production plan calendar follows ISO 8601, this means that a week belongs to a particular month only if its thursday belongs to that month**

{{< /note >}}