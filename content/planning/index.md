---
date: 2016-03-12 19:08:11 +0000
title: Planning
weight: 40

---
## Overview

The planning has two section: **People Allocation** and **Projects' Heatmap**, the first one is useful to look at teammates availability, allocate them for projects and check that you respect the budget quota; the second section shows the daily amount of people needed by each project, it also offers a _milestone system_ that allows your team to have an overview on the scheduled events.

Everything is arranged into a six weeks calendar, you can explore past and future using the horizontal scroll or clicking on the top right arrow navigator.

The blue dot in the calendar's header highlights the current day.

## People Allocation

On the top you have three buttons, from the left:

* The **select project button** lets you search for a project and pick one from the list;
* The **filter people button** lets you filter the teammates you want to see in the planning;
* The **switch weeks button** lets you travel in time, you can see future and past weeks.

When you select a project, only the half-days allocated for that project will be highlighted, this allows you to have a general point of view on the teammates which are already on the project.  For the same reason, selecting a project will sort people by showing first all those who were planned on the project at least once. Because is better to work with people that are aware of the challenge, right?

To know how many budget days you can allocate just look at the box that appears at the top of the page: here you can see all the days left, grouped by user level.

All your teammates are listed on the left, to allocate a person you just need to click on the half-day you want to assign. If you hold and drag your mouse, you can assign more half-days at once.

You can plan a person by half-days: we think it's not worth planning by more fine-grained amounts of time. If your tasks require less time, just group them!

{{< note title="Note" >}}

**You cannot plan people for the current day: if you don't know what you have to do when you arrive at the office, how can you be productive?**

**A project manager can plan other people on a project only if a budget exists for that project.**

{{< /note >}}

{{< img-center src="/uploads/2017/11/02/planning-people.gif">}}

The **filter people button** lets you combine different filters, for example you may decide to see only the internal employees which are managers and have a background in design (you can use \[tags\]({{< relref "settings/index.md#team" >}}) to divide employees into categories).

{{< img-center src="/uploads/2017/11/02/planning-people-filters.png">}}

## Projects' Heatmap

This is useful to show the _weight_ of each the planned project: the darker is the color of a cell, the more people ore planned on the project that day.

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

Here you can specify the amount you're planning to produce for each project. The amount is expressed as a percentage of the project's total value.

Past months are read-only and are automatically populated with the real production, based on the month's project status.
You can edit future months but remember: a production plan can be saved only if you've distributed the 100% of its value, you can easily chek this by looking at the total: a red total means that you need to distribute the remaining amount.

Each time you edit a past project status, the related production plan is recalculated in order to allocate the remaining production or to adjust inchoerent plans. The adjustments are reported as orange monthly apex.

A solid blue line indicates the project's duration, a dashed line instead tells you that the project's boundaries (the project start/end) are outside the visible planning's portion.

{{< img-center src="/uploads/2018/03/28/production-plan.png">}}