---
draft: false
date: 2016-03-12T19:08:11.000Z
title: Planning
type: ''
weight: '40'
---

## Overview

The planning has two section:

* **People Allocation** helps you to look for teammates availability,  resources allocation and check if the budget quota is respected.
* **Projects' Heatmap** shows the daily amount of people planned on each project. It also offers a *milestone system* that allows your team to have an overview on the scheduled events.
* **Production Plan** where you can express the percentage of the project's total value you are going to produce in each month.

Everything is arranged into a six weeks calendar, you can explore past and future using the horizontal scroll or clicking on the top right arrow navigator.

The blue dot in the calendar's header highlights the current day.

## New People Allocation

With the latest release, People Allocation has been completely revamped. You'll find a smoother interface, new tools for fast planning, and some brand-new features. This guide walks you through everything you can do.

### Filters and search

If you work in a large team or have several projects open at the same time, the grid can get crowded. Filters and the search bar exist exactly for this: they show only the people you're interested in at that moment, without touching any of the underlying data.

How to search for a person

Type in the search field at the top. You don't need to scroll through the whole page: you can search by first and last name. The grid updates as you type.

How to use filters

Click "Add filter" to open the panel. You can filter by many criteria: for example level, job title, business unit, skill, language, or by project, client, PM. For each filter you can choose whether to include those matching that criterion (is) or exclude them (is not). You can combine as many filters as you like — only people who meet all the criteria together are shown.

Active filters appear as chips in the bar: remove one by clicking the ×.

> Note: If you filter by a single project at a time, the grid also shows a small panel with the available hours for that project, person by person.

### Granularity selector

The grid can show the calendar in three different ways, depending on how much you want to "zoom."

* Daily: Perfect when you need to plan precisely or check what's happening in a specific week.
* Weekly (default view): The balance point between detail and overview — most of the time you'll be here.
* Biweekly: When you want to plan across two weeks.
* Monthly: Useful when you want to understand how workload is distributed over the long term, without going into the detail of individual days.

> Note: In Monthly view the blocks become small and the text inside them may be truncated. Hover over them to read the details, or switch back to Weekly view if you need to work on them.

To change view, click the granularity selector in the top bar: a dropdown opens and you choose the one you prefer.

### Density change

If the grid feels too compact or too spread out, you can adjust the display density from the settings. This option controls row height and the overall size of elements in the grid.

Available options

* Compact: thinner rows, more people visible at once without scrolling. Ideal for large teams or a quick overview.
* Comfortable (default view): the balance point — standard row height, readable text in the blocks.
* Spacious: taller rows, bigger blocks. In this mode, linked task information also appears directly in the block, without needing to open the tooltip.

How to change it

You'll find the option in the on-page settings (⚙️ icon). The preference is saved for your profile, so it doesn't affect other users' views.

### Adding an allocation from the sidebar

The most complete way to create a new allocation is through the sidebar. It lets you configure everything calmly — project, hours, dates, status — before saving.

How to open the sidebar

Click New Allocation at the top right. The sidebar opens on the right side and the grid narrows, but stays visible — so you can see in real time where the block will be placed.

What's in the form

* Start and end dates — the planning range.
* Hours / Percentage — how much to plan. You can express the value in hours per day (HH:MM).
* Assign to — choose who to assign the allocation to. You're preselected by default. Click + to add more people. If a person doesn't have enough availability, they're highlighted in yellow.
* Select Project — search and select the project.

> Note: If the hours you're entering exceed the project's available budget, the system flags it with a warning. From there you can choose to convert days to budget or revise the budget directly.

* Note — free text field, later visible by hovering over the block.

### Adding an allocation from the calendar

If you prefer a more visual and quick approach, you can create an allocation directly by drawing it on the grid. It works intuitively: click, drag across the days you want to include, and release.

How to do it

1. Make sure you're in Add/Edit mode (the arrow in the toolbar — see the Cursors section).
2. Position yourself on the person's row and on the start day you want.
3. Click, hold, and drag to the right.
4. Release: the sidebar opens with the info already filled in: start and end, hours, and assignee.

> Note: Hours are automatically pre-filled with the full day. You can edit them directly in the small panel before saving.

### Repeat allocation

Do you have someone working on the same project every week for the next three months? Instead of manually creating each individual allocation, use the Repeat function: you configure it once and the system generates all the occurrences for you.

How to activate it

Repetition isn't a separate action — you'll find it as a tab inside the sidebar. At the top, select Repeat instead of Once.

What to configure

* From / To: the dates of the single occurrence.
* Repeat: how often to repeat.
* Until: how long to keep creating occurrences.

Every block that's created has a small icon indicating it's part of a recurring series.

Editing or deleting a single occurrence

Click the block and make your changes. The system asks whether you want to change only that one (This allocation) or that one and all following ones (This and all future allocations).

> Note: If issues come up while creating the repetitions — insufficient budget, person unavailable on certain dates, occurrences falling on holidays — the system flags it before proceeding, so you can decide how to handle them.

### Planning on Basket

The Basket lets you plan hours for a project that doesn't exist yet — for example an opportunity you're still evaluating, or an internal activity without a formal project. You can create the basket on the fly directly from People Allocation and start planning right away, without waiting for the project to be officially created.

How to create a basket

When you create an allocation and search for the project in the sidebar or calendar, if the project doesn't exist yet you'll see the "Create in Basket" CTA. Clicking it opens a drawer with only two required fields:

* Name\* — the name you want to give the basket.
* In charge\* — the person responsible (pre-filled with your name).

After saving, the basket is immediately available for planning in People Allocation and also appears in wethod's Basket section, where you can view and edit all the associated information.

How to recognize a basket block

Allocation blocks on a basket look different from those on real projects, so you can spot them at a glance:

* Grey outline — the basket doesn't have a Job Order Category yet.
* Colored outline — it's been moved to pipeline and has a JOC assigned.
* Solid color — it's in pipeline with a budget, or has a JOC with unlimited planning.

How to filter by project type

In the filter bar you'll find the Project Type filter, which lets you filter by Basket, Pipeline Opportunity, or Project. Useful for quickly isolating all basket plannings.

How to manage a basket

From the Basket section you can open the detail drawer for each entry. From there you'll find the available actions:

* Delete — deletes the basket and all associated planning. The system asks for confirmation, specifying that the action is irreversible and that the planning blocks will also be deleted.
* Move to Pipeline — promotes the basket to a Pipeline Opportunity, keeping all planning already done.

> Note: Only those with permission to create Pipeline Opportunities can use the "Move to Pipeline" action.

### Utilization in hours or percentage

The counters column — the second fixed column on the left of the grid — can show usage values in hours or in percentage. You can choose which you prefer: the preference is personal and doesn't affect other users' views.

In H mode (hours):

* Planned — hours planned in the selected period.
* Unplanned — hours still available.
* Overtime — hours exceeding capacity.

In % mode (percentage):

Utilization — occupancy as a percentage relative to the person's total capacity. Useful for comparing resources with different contracts.

In both modes, colors give an immediate visual indication:

* Grey — the person still has availability (under 90%).
* Green — the person is close to full occupancy (over 90%).
* Red — the person is in overtime (over 100%), or has at least one day in overtime within the selected period.

The row at the top of the column shows the aggregate total for the whole visible team in the current period.

> Note: Hovering over the column header shows all the detailed values: Planned, Unplanned, Overtime.

### Block hover

Hovering over an allocation block in the grid shows a tooltip with that allocation's details. This is especially handy in Monthly view, where the blocks are small and there's no room to read the text inside them.

What's in the tooltip

* The full project name, with a circle in the associated color.
* The block's total hours — always in hours, even if the grid is set to show percentages. So you always see the actual conversion.
* The list of Project Plan tasks linked to that allocation. Clicking the → arrow next to a task takes you directly to its detail in the Project Plan.

> Note: Blocks with a project probability below 100% appear in a lighter color compared to confirmed blocks — so you can visually distinguish the project's status without opening anything.

### Block resize

Want to lengthen or shorten an allocation without opening the sidebar? Drag the block's edges directly in the grid.

Horizontal resize — changes the dates

Grab the right or left edge of the block (the cursor changes shape when you're in the right position) and drag to extend or reduce the duration over time.

Vertical resize — changes daily hours

Grab the bottom edge of the block and drag down to increase hours, up to decrease them. Hours update in half-hour increments as you drag.

> Note: If the resize pushes hours beyond the project's available budget, the block returns to its original size on release and a message appears prompting you to update the budget.

### Block Drag & Drop

Need to move an allocation to another week, or redistribute it to a colleague? Drag it directly to the new position.

How to do it

Click the center of the block (not the edge, or you'll trigger resize) — the cursor becomes a hand. Then drag:

1. Horizontally to move it to another period.
2. Vertically to reassign it to another person.
3. Or in both directions at once if you need to move it in time and change the person.
4. Release when you're in the right position.

> Note: If you don't have permission to edit another person's allocations, the destination cells turn red while dragging and an error toast message appears on release.

### Cursors

In the toolbar you'll find four interaction modes for the grid.

Add/Edit - Keybord Key: A

The default mode. Create new allocations, edit existing ones, use resize and drag & drop.

By Project - Keybord Key: P

Select a project and the people already allocated to it move to the top. You can plan by clicking cells without having to choose the project each time.

Split - Keybord Key: S

Click a block spanning multiple days to split it into two separate blocks at the point you click.

Delete - Keybord Key: D

Click a block to delete it directly, with no confirmation.

> Note: When in Delete mode, you're not asked for any confirmation before deleting — be careful not to accidentally click the wrong blocks.

To change mode, click the icon in the bar or press the corresponding key. To return to Add/Edit from any other mode, press ESC.

### Capacity

Each person can have a different capacity, defined in [Team section](https://support.wethod.com/settings/index/#team-metadata), and it will be reflected on the available space in the People Allocation calendar.

* When one tries to plan on hours outside user's capacity, an alert will ask if he really want to plan over that. If user clicks “Yes”, plan is confirmed and no similar warning appears until user changes the selected project. If user clicks “No”, those hours or days are removed from requested plans.

### Weekends

A five days calendar (Monday to Friday) is used by default.

If you enable “Use a 7-days week calendar” is enabled in [company settings](/settings/index/#company), the calendar will include Saturdays and Sundays.

### Bank holidays

Similar to weekends, [bank holidays](https://support.wethod.com/settings/index/#bank-holidays-planner) are also highlighted with a special visual pattern. For each person in this section, the holidays linked to his [company location](https://support.wethod.com/settings/index/#company-locations) are highlighted. When planning a person on a bank holiday a modal window asks if you want to proceed with the scheduling or you want to leave bank holiday days empty.

### Overcapacity

Overcapacity occurs when you plan more hours than a person has available in a given period. How People Allocation handles this depends on how your [company settings](/settings/index/#company) are configured.

> Note: By default, the ability to go into overcapacity is disabled: the system directly blocks actions that would exceed the person's availability. If it's enabled in company settings, the system allows over-planning but flags it visually.

When overcapacity is enabled

A red block appears in the grid starting from the point where the person's availability ends, extending to show the excess hours. In the counters column on the left, the value becomes negative (e.g. -1H) on a red background with the label Overtime.

When overcapacity is disabled

The system blocks the action before you can exceed availability:

* If you're creating an allocation from the sidebar, saving is disabled and a message appears near the Assign to field.
* If you're using the calendar to draw a block, the panel blocks creation with a message.
* If you're resizing, the block returns to its original size with a warning.
* If you're using drag & drop toward another person, the move succeeds but — if overcapacity is enabled — you're flagged visually.

How to resolve an overcapacity

You have several options: you can reduce hours on one of the allocations, move one to a freer period, extend it over more days via resize, or pass it to a colleague who has availability.

> Note: Each person's availability depends on their profile (weekly hours, contract type). If the values don't seem correct to you, contact your account administrator.

### User Placeholder

Do you need to plan hours for someone who hasn't been hired yet or hasn't accepted the invitation yet? You can create a Placeholder in Team — a temporary person who appears in People Allocation as a plannable resource, without having to wait for the real account to be activated.

How to create a placeholder

Go to the end of the list of people or directly in [Team](https://support.wethod.com/settings/index/#team) section and click Add user. You'll find the same fields as a normal user, but for a placeholder the only required fields are Level and — if your company uses pricelist planning — Pricelist. Other fields (role, capacity, location) are pre-filled with default values and can be edited.

Once created, the placeholder immediately appears in People Allocation with a generic person icon and the temporary name you set. Hours planned for them are deducted from the project budget as normal.

How to invite them when ready

Add their email to the profile and click Invite. Until the email is filled in, the button stays disabled.

> Note: If you don't have permission to send invites, the email field and Invite button are disabled.

How to edit them

You can change level, capacity, and other properties at any time. Available hours are recalculated automatically.

How to delete them

You can delete a placeholder: deletion also removes the associated planning.

> Note: Hours already accounted for in past weeks are not recalculated. Those from the current week onward are "returned" — availability values update accordingly.

Filters

In the filter bar you'll find the User Status filter with two options:

* Active — users with an active account.
* Placeholder — placeholders (including those with a pending invite).

> Note: Placeholder management is controlled from the Team section in company settings. Without the Edit Placeholder permission, it's not possible to create or edit placeholders.

### Pricelist planning

This feature lets you specify, for each allocation, which contractual rate should apply. This way, planned costs in financial reports reflect the project's real rates, not just hours.

> Note: Pricelist planning must be enabled in company settings by an administrator. If you don't see it, contact whoever manages your wethod account.

How it works

When the feature is active, the grid shows a small panel with available hours broken down by pricelist.

Select the pricelist you want to apply by clicking the corresponding row: the grid then updates and automatically hides people who don't have that pricelist, so you only see who's actually plannable at that rate.

From there, you create or edit the allocation as normal.

> Note: The available pricelists are those configured on the project you selected. If none appear, check the project's configuration.

### Tasks linked from Project Plan

If your team also uses wethod's Project Plan, tasks assigned to people are visible directly in the People Allocation grid. You don't need to switch between modules to understand what a person has on their plate: allocations and operational tasks coexist in the same view.

To see a task's details

Hover over an allocation block: the tooltip that appears also shows the list of linked tasks. Click the → arrow next to a task to open its detail drawer directly in the Project Plan.

What you can do from People Allocation

You can only view and navigate to tasks. For now, to edit them — change dates, hours, assignment — you need to go to the Project Plan.

> Note: Tasks appear in the grid only if they have an assigned person and defined dates in the Project Plan. If a task is missing, check that these two fields are filled in in the Project Plan.

### Convert available budget days from another user level

This feature allows you to quickly dispose of extra budget days, when needed, in order to allocate people on a project.

You will access to a simple view of the project’s budget, including areas, tasks and the total number of available days per user level.

Use the number of available budget days from a user-level of your choice and see on the top the conversion into budget days you can use for other user-levels. You can only convert budget days within the same pricelist.

The conversion ratio is based on the daily cost of user-levels and it’s not possible to exceed the total amount of internal cost on the budget.

A new version of the budget is automatically created each time a user makes a conversion.

> Note: You need to use all the available contingency to be able to convert days between levels.

### Dealing with allocation requests

Projects with job order category of type "plan upon request" cannot be planned the usual way: user needs to visit [Allocation Requests](/planning/index/#allocation-requests) and ask to be allocated.

## Allocation Requests

Particular job order categories may expect people to ask to be planned on them, this can be the case of job order categories representing holidays, leaves or - why not - R\&D projects.

"Allocation requests" section is where all this requests can be created and managed.

**To create a request**

1. Click on "Add request" button to open related sidebar
2. Select the project to request (required). You can only use a project which job order category has the "plan upon approval" flag enabled. To enable this flag just head to the [company settings](/settings/index/#company) section
3. Select start date and end date (required). Once both selected, for each day in the period you can express how many hours to request (1 - 8), by default each day is an 8 hours request
4. Add notes if needed

Once created, a request acquires the "Pending" status and

* If the selected from-to is within 14 days an “urgent” mail notification is sent to the user allocation manager, if exists. Allocation manager for a user can be set from the [team settings](/settings/index/#team) section
* Request is displayed in people allocation using a particular pattern

Now users with **approve permission** can see "Approve/reject" button and:

* **Approve** request: it gets "Approved" status and a mail notification is sent to the user who made the request
* **Reject** request: it gets "Rejected" status and a mail notification is sent to the user who made the request

Once approved, a request is shown in planning as a "normal" project. It still cannot be planned straight from here.

Users with **edit permission** can edit a request like this:

1. Click on the request arrow button to open its sidebar
2. Click on the edit button

A special **edit permission** is needed to edit and see others requests.

Approved and rejected requests cannot be edited but can be deleted.

When a request is deleted, it disappears from [people allocation](/planning/index/#people-allocation).

Creating or editing a pending request can create **conflicts** if:

1. In the requested period there is **at least one hour already planned**
2. In the requested period there is **at** **least one hour belonging to another request**

**Requests with conflicts**

* Get a particular status
* Does not appear in people allocation
* Shows conflict days inside details sidebar
* Cannot be approved: they can just be edited, deleted or rejected

If a request has conflict with another pending request only the last created request will be marked as “conflict”, the existing one keeps its status.

Once a week an email containing the recap of all pending planning requests is sent to all allocation managers (excluding “urgent” emails).

## Projects' Heatmap

This is useful to show the *weight* of planned people on each project: the darker is the color of a cell, the more people are planned on the project that day.

The color's range is made up of 10 levels from white to blue, where the darkest blue represents the most planned people on a project in a day for the visible range of time.

By clicking on a day you can:

* See who is planned on a project for the day
* See and edit the **event** related to the day: usually a project's life is fulfilled of important events, by tracking them you're giving a general point of view to all of your organization. This is also useful to avoid overlapping of two or more important events that usually need a lot of resources.

You can hide a project by clicking on the "**X**" near the project's name.

> Note: The heatmap is always updated based on the visible projects and date range.

## Production Plan

Here you can express the percentage of the project's value you plan to produce for each month.

You will only see the projects with a value greater than 0: you cannot edit the plan when there is no value.

Past months are read-only and are automatically populated with the real production, based on the month's project status.
You can edit future months but remember: a production plan can be saved only if you've distributed the 100% of its value, you can easily check this by looking at the total: a red total means that your planning is someway different from 100%.

Each time you edit a past project status' week or when a month ends, the production plan for that week is recalculated in order to allocate the remaining production or to adjust incoherent plans. The adjustments are reported as orange monthly apex.

A solid blue line indicates the project's duration, a dashed line instead tells you that the project's boundaries (the project's start/end) are outside the visible planning's portion.
When you move the start or end date of a project with probability lower than 90%, its production plan will reflect the changes, adapting its duration and distributing accordingly.

Other than searching projects by name, pm or client, you can even filter them by who's in charge for them: **Mine** shows you all the projects where you're pm or account while **Others** ... well, we think you're smart enough to understand it by yourself.

If you're editing a project, you can move its whole duration or the plan for a single month by simply dragging them as shown in the GIF below. If you change a project's duration, it will be saved as soon as you click on the "save" button.

Use the "**Auto distribution**" function on a project to spread it's remaining plan on the future months of its duration.

> Note: The production plan calendar follows ISO 8601, this means that a week belongs to a particular month only if its thursday belongs to that month

***

## Old People Allocation

People Allocation gives an overview of the team’s allocation on the projects in your company. From here you can plan your colleagues, filter them by skill, language, interest or tag, and access their profile pages to learn more about their backgrounds and goals.

This planning features three different views and planning options:

* **Hourly**: team allocation on projects by the hour;
* **Daily**: team allocation on projects on a daily basis;
* **Weekly**: team allocation on projects on a weekly basis.

**People in your team**

All your teammates are listed on the left with their allocation. Each person on the list features:

* **A profile picture** or the initials;
* **Name and surname**;
* **Tags**  You can use [tags](/settings/index/#team) to group employees into categories.
* **Level of seniority** (i.e. JR, SR, MGR, SRMGR);
* **Objective and Key Results (OKR)** The status of the teammate's objectives and key results on each quarter of the year. Wethod shows whether the OKR of a quarter were (grey label) or were not placed (white label) by the user, and whether were discussed (blue) or checked (green) together with a sponsor;
* **Allocation on projects** Each slot shows the amount of hours, days or weeks a user is planned for a project. Each project follows the colour code of the [job order categories](/settings/index/#company) used in your company.

**Team allocation overview on a specific project**

To select a project you have two options:

1. Select the project from the “Select Project” button. Search for the project and pick it from the list.
2. Select the project by clicking on a day/week on the plan. If the day/week features allocations on different projects, a window will open to show a list with the detail of the hours of allocation on each project. To select a project from the list, pick one and click “Select”.

When a project is selected Wethod will sort the people on the list by showing first all those who were planned on the project at least once – It’s better to work with people that are already aware of the challenge, right?

All the time slots planned for the selected project will be highlighted throughout the plan.

**Plan teammates on a project**

1. Select a project.
2. A box on the top of the page will show how many budget days and hours are available to plan, grouped by user level.
3. If needed, you can **apply multiple filters on people**. For example, you may decide to see only the internal employees which are managers and have a background in design
4. You can use the search bar even to **filter people by** **[skill](/settings/index/#skills)**, **interest or language**. Try to input something like **skill:photoshop;skill:illustrator** to find everybody who has a skill named "photoshop" and a skill named "illustrator". Type **language:italian;language:english** to find everybody who speaks “Italian” and “English", or instead type **interest:reading** to find everybody who loves reading.
5. To **plan for an hour, a half day or for an entire week**, just position the mouse on the day/week you want to allocate and click to plan. Click and drag to quickly assign more than an hour, a half day or a week at once.

\*If the day/week has some hours/days already planned on other projects, wethod allows you to plan the user on the remaining hours/days available for that day/week.

When you run out of days, you can choose between two options:

* Review the budget and wait for the approval of a supervisor.
* Quickly convert available budget days from another user level.

### Repeat an allocation

1. Click "Enable recurring mode" on the top right
2. Select the allocation you want to repeat
3. Choose the option "Repeat allocation"
4. Select "All allocations" to repeat the whole allocation in the day/week or "Single allocation" to choose how to repeat each project
5. Choose the pattern of repetition
6. Select an end date for the repetition
7. Click "Plan"
8. An alert will tell you if the budget is not sufficient to cover the repetition in the selected time range or if the repetition pattern clashes with existing allocations.

If you enable “Highlight weekends” in [company settings](/settings/index/#company) and then you try to repeat something planned on a Saturday or Sunday, an alert will ask if you really want to repeat the weekend. If you deny, repetition is canceled

**Remove future allocations**

1. Click "Enable recurring mode" on the top right
2. Select the allocation you want to remove from the future
3. Choose the option "Remove future allocations"
4. Select an option between "All allocations" to remove the whole set of allocations from the future or "Single allocation" to remove a single allocation from the future.
5. Select an end date.
6. Click "Apply"
