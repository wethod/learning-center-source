---
date: 2024-10-07T12:20:00.000Z
title: Data Freezing Engine
type: ''
weight: '99'
---

## Overview

Data freezing is a concept and functionality that spans most sections of the system. At its core, it ensures the accuracy and reliability of historical data over time, preserving information integrity. This functionality is particularly useful for companies conducting quarterly or semi-annual financial statements, as it guarantees that Wethod continues to respect the closing data.

Data that requires freezing typically has an economic or financial impact on the Profit and Loss (P\&L) statement.

In practice, data freezing is implemented through a section called "Data Freezing Engine." This engine allows users to pause and freeze past periods, while a series of custom controls and logic ensure that the data remains unaltered.

Data freezing means that all frozen data must be set in stone and no longer editable.

Although you can use data freezing for financial statements, we are not pursuing ISO or similar certifications, so no special precautions are necessary in this regard.

## Data Freezing Engine

In this section you will be able to select the period of time to freeze or pause your data and review the inconsistencies before running the command.

1\. Timeline: 

The timeline represents the period during which a company has created, imported, modified, deleted, and stored data within WETHOD—spanning from the company's creation month to the most recent month.

The timeline offers three views:

* Months (default)
* Quarters
* Years

Users with specific permissions can segment the timeline by selecting a time period. This is done through a modal where they can choose the 'to' month, but not the 'from' month. The 'from' month is locked to maintain freezing contiguity.

![](</uploads/gif data freezing.gif>)

 Users can choose from 3 data edit options via the edit status button:

1. 🟢 Free to edit: Data within the selected time segment remains editable.
2. 🟡 Paused edit: Data becomes non-editable, but reverting to status 1 is still possible.
3. 🔘 Frozen Data: Data becomes permanently non-editable, with no option to revert to states 1 or 2.

👉 Clicking "new segment" allows users to define a new segment from the 'free to edit' time period. This spans from the start month of the free period (non-editable input) to a chosen end month.

Layered data editing must be applied over a contiguous range of months (with the single month as the base unit, not days). A range of months must have a level equal to or lower than the previous range.

For example: If you create accounts in January, freeze data in March, and pause data in June, then in September you can: freeze or release from May to June, and pause from July to September. However, you cannot freeze from July to September without first freezing from May to June.

📌 The start date of a segment will never be selectable by the user. Instead, Wethod will set it by default, depending on whether you want to pause or freeze a period. It will choose the first non-paused month or the first non-frozen month, respectively.

For each time period selected to pause and freeze data changes, Wethod will provide a data verification report. This report allows freezing to be performed at a later date.

⚠️ Remember: Data freezing can only be performed on a Paused period, not directly on a Free period.

The section will comprise 4 tables containing data from the selected time segment for user review.

You will be able to start a new data review by editing the selected segment form "data review" to free.

![](</uploads/Screenshot 2024-10-08 alle 10.57.34.png>)

2\. Data Review Dashboard 

This section activates only when a segment is selected from the timeline. Upon selection, a data review section appears immediately below. This section displays warnings that allow users to check for inconsistencies in project data, enabling them to successfully pause or freeze the data within that segment.

The segment can be edited by changing its duration via the 'to' input or by altering its status—essentially choosing the data editing option.

![](</uploads/data freezing 2.gif>)

\*\*Unarchived Projects \*\*

It brings the user's attention to all projects that are either lost or have 100 percent probability, are completed and have invoiced the full value, included in the selected time portion.

**Won Projects At 90% Of Probability And Opportunities** 

It Brings the user's attention to all 90 per cent projects and opportunities affected by the selected time portion that would not be included in the freeze. This is because I can only freeze a safe, 100 per cent project.

\*\*Unapproved Budgets \*\*

Budgets for the following opportunities/projects must be approved in order to freeze data.

**Alerts overview**

It draws the user's attention to all red, yellow, and blue alerts for projects within the selected time period. These alerts should be resolved to ensure the quality and reliability of the frozen data. 

## Data Freezing - Project

When you freeze a period of time, certain project attributes remain editable: Name, Client, Client Contact, Client PO, PM, Account, Project Type, and Job Order. Furthermore, if the period is only paused, you can archive the project and modify its value, duration, and external costs. 
