---
date: 2024-10-07T12:20:00.000Z
title: Data Freezing Engine
type: ''
weight: '99'
---

## Overview

Data freezing is a concept and functionality that spans most sections of the system. At its core, it ensures the accuracy and reliability of historical data over time, preserving information integrity. This functionality is particularly useful for companies conducting quarterly or semi-annual financial statements, as it guarantees that Wethod continues to respect the closing date.

Data that requires freezing typically has an economic or financial impact on the Profit and Loss (P\&L) statement.

In practice, data freezing is implemented through a section called "Data Freezing Engine." This engine allows users to pause and freeze past periods, while a series of custom controls and logic ensure that the data remains unaltered.

Data freezing means all frozen data must be set in stone and no longer editable.

Although you can use data freezing for financial statements, we are not pursuing ISO or similar certifications, so no special precautions are necessary.

## Data Freezing Engine

In this section, you will be able to select the period to freeze or pause your data and review the inconsistencies before running the command.

#### 1. Timeline: 

The timeline represents the period during which a company has created, imported, modified, deleted, and stored data within WETHOD—spanning from the company's creation month to the most recent month.

Users with specific permissions can segment the timeline by selecting a period. This is done through a modal where they can choose the 'to' month, but not the 'from' month. The 'from' month is locked to maintain freezing contiguity.

![](</uploads/gif data freezing.gif>)

 Users can choose from 4 data edit options via the edit status button:

1. 🟢 Free to edit: Data within the selected time segment remains editable.
2. 🔵 Data review: Data within the selected time segment remains editable, but you can review inconsistencies before pausing data.  
3. 🟡 Paused edit: Data becomes non-editable, but reverting to status 1 or 2 is still possible.
4. 🔘 Frozen Data: Data becomes permanently non-editable, with no option to revert to the other statuses.

👉 Clicking "new segment" allows users to define a new segment from the 'free to edit' time period. This spans from the start month of the free period (non-editable input) to a chosen end month.

Layered data editing must be applied over a contiguous range of months (with a single month as the base unit, not days). A range of months must have a level equal to or lower than the previous range.

For example: If you create accounts in January, freeze data in March, and pause data in June, then in September you can: freeze or release from May to June, and pause from July to September. However, you cannot freeze from July to September without first freezing from May to June.

📌 The start date of a segment will never be selectable by the user. Instead, Wethod will set it by default, depending on whether you want to pause or freeze a period. It will choose the first non-paused month or the first non-frozen month, respectively.

⚠️ Remember: data freezing can only be performed on a paused period, not directly on a free period.

You will be able to start a new data review analysis with the dedicated button. \
A data verification report will then show you 4 tables containing data inconsistencies that must be reviewed before changing the status.

![](</uploads/Screenshot 2024-10-08 alle 10.57.34.png>)

#### 2. Data Review Dashboard 

This section activates only when a segment is selected from the timeline. Upon selection, a data review section appears immediately below. This section displays warnings that allow users to check for inconsistencies in project data, enabling them to successfully pause or freeze the data within that segment.

The segment can be edited by changing its duration via the 'to' input or by altering its status—essentially choosing the data editing option.

![](</uploads/data freezing 2.gif>)

**Unarchived Projects**

It brings the user's attention to all projects that are either lost or have 100 percent probability, are completed and have invoiced the full value, included in the selected time portion.

**Won Projects At 90% Of Probability And Opportunities** 

It Brings the user's attention to all 90 % projects and opportunities affected by the selected time portion that would not be included in the freeze. This is because I can only freeze a safe, 100 % project.

**Unapproved Budgets**

Budgets for the following opportunities/projects must be approved in order to freeze data.

**Alerts overview**

It draws the user's attention to all red, yellow, and blue alerts for projects within the selected time period. These alerts should be resolved to ensure the quality and reliability of the frozen data. 

## Determine if data is frozen

Some data are linked to a period (e.g. timesheet and project status are linked to a week), others are linked to a specific date (e.g: invoices have a date) while others have ranges of dates (e.g. project has from-duration, payrolls have start-end dates). For each type has a different behavior, unless otherwise specified these roles apply:

* Data with an exact date (e.g: invoice): we consider the month in which the date falls
* Data with a period (e.g: timesheet, project status): we consider the [ISO week](https://www.notion.so/Data-Freezing-07508db4896345679b7e98aeab115c5b?pvs=21) to determine what month a week belongs to
* Data with a range of dates (e.g: projects, payrolls).

## Impact on Specific Sections:

#### **Data Freezing - Project**

Using the project start date and its duration, we can determine whether the project occurs before, after, or straddles the freeze period.

When you freeze a period of time, certain project attributes remain editable: Name, Client, Client Contact, Client PO, PM, Account, Project Type, and Job Order. Furthermore, if the end date of the project falls outside the frozen period you can archive the project and modify its value, duration, external costs and budget.

#### **Data Freezing - Timesheet**

When a timesheet falls into a frozen month it is fully blocked, no attributes can be altered. This applies both to weekly and detailed timesheet.

#### **Data Freezing - Orders**

Orders must be frozen because they impact the company's external costs.

To determine whether an order is frozen or not we use the oldest between the issue date and the start date of the period of supply.\
For this reason those cannot be edited once the order is locked.

Some properties are always editable:

* Purchase Order
* Notes
* Documents (upload and delete)
* Status (“Send”, “Approve”, “Set as paid”)

#### **Data Freezing - Project status**

Project statuses are locked when its date falls into a locked period and uses the ISO week to determine so. When a project status is locked all attributes are locked.

The “project status correction” procedure will update only non locked data.

#### **Data Freezing - Production**

The ISO week of the production is used to determine if it is frozen. For partially frozen projects with production weeks spanning both frozen and non-frozen months, changes to the budget (total days or final net price) no longer distribute the production delta across all production weeks. Instead, the entire delta is applied to the first non-frozen week.

#### **Data Freezing - Travels**

Travel reference dates consist of the departure date (calculated as the earliest date among all travel carriers) and return date (optional). These fields that are not editable when the travel is locked:

* Status ("Send", "Submit")
* Date and return date of each travel category
* Project
* Employee
* Value

## Data Freezing - Permissions:

You can allow the user level to view, pause, freeze or edit paused data.

* view : used to show Data Freezing Engine
* pause: allows to pause/unpause a period
* freeze: allows to freeze a period
* edit paused data : allows to modify data within the paused time periods
