---
date: '2017-06-13T18:08:29+02:00'
title: Alerts
weight: 21

---


## Overview

This widget shows all the inconsistencies regarding the user. Each alert has a priority (indicated by its color):

* Red alerts have an high priority and must be solved as soon as possible;

* Yellow alerts have a low priority and can be seen more as advices.

Hovering on an alert will display a description of the problem.

## Description

### Unsent Order

This alert is shown to the project manager who have created orders not sent yet.

### Opportunity Due Date

This alert is shown to the project manager who have created an opportunity that's expiring in 3 days or that's already expired.

### Project Probability / Invoice Plan

This alert is shown to the project manager of a project which has:

* An invoice plan manually set;

* A probability lower than 90%.

### Budget Submitted

This alert is shown if you have the permission to approve budgets and there's a budget waiting for approval.

### Budget Consumption Too Fast

This alert is shown if you're manager of a project where the [budget consumption]({{< relref "reports/index.md#budget-consumption" >}}) is more than 20% greater than the project's [progress]({{< relref "glossary/index.md#absolute-project-progress" >}}).

### Budget Consumption Too Slow

This alert is shown if you're manager of a project where the [budget consumption]({{< relref "reports/index.md#budget-consumption" >}}) is more than 20% lower than the project's [progress]({{< relref "glossary/index.md#absolute-project-progress" >}}).

### Project Status / Archived

This alert is shown if you're manager of a finished project which isn't already been archived.

It's a good practice to archive your projects when their project status reach 0.

### Project Probability / Budget

This alert is shown if you're manager of a project with probability greater than 50% but with budget in draft or missing.<span style="font-size: 1rem;">&nbsp;</span>

### Planning or Timesheet but Probability < 90%

This alert is shown if you're manager of a project with probability lower than 90% but which already have a planning and/or timesheets.

### Planning > Project Status

This alert is shown if you're manager of a project for which are planned (in the future) more days than the last project status days. What's the meaning of requiring more resources than what you really need?

### Client PO

This alert is shown to the project manager if one of the following situations happens:

* Project has probability of 100% or has some Invoices but there isn't a Purchase Order set for the project;

* A Purchase Order is set for the project despite its probability is lower than 100%.

A Purchase Order is needed to emit invoices, so it's strange that a 100% probability project hasn't a Purchase Order or vice versa.

### Project Start

This alert is shown to the project manager if one of the following situations happens:

* A project is started but its probability is lower than 90%;

* A project is going to start during the current month but its probability is lower than 75%.

A project is considered started if it has a start date in the past or if someone has submitted timesheets for it.

### Project Status

This alert is shown to the manager of a project who forgot to update the project status in the last two weeks.

### Timesheet

This alert is shown to the employee of a project who forgot to submit the timesheet in the last two weeks.

### Project Duration / Timesheet

This alert is shown to the manager of a project which has some timesheets done before the start date or after the end date. Why are your teammates doing timesheets for a non active project?

### Invoice Plan / Budget Final Net Price

This alert is shown to the manager of a project if the following situations happens:

* The invoice plan is set as manual;

* Invoice plan's total amount and final net price mismatch.

This can happen when you edit budget after setting invoice plan as manual.

### Job Order / Project Probability

This alert is shown to the manager of a project if one of the following situations happens:

* The probability si greater than 90% but the project has't a job order;

* The probability si lower than 90% and the project has a job order.

Only active project must have a [job order]({{< relref "glossary/index.md#job-order" >}}).

### Job Order used multiple times

This alert shows that the Job Order of a Project is used multiple times by different Projects.

### Planning / Project End

This alert is shown to the manager of a project for which are planned people somewhen after the project's end date.

### Planning / Budget Status

This alert is shown to the manager of a project which has future planned resources but hasn't an approved budget.

You cannot plan resources if you haven't a budget which gives you the right to do it.

### Non Chargeable / Budget Final Net Price

This alert is shown to the manager of a non chargeable project which has a final net price greater than zero. A non chargeable project can't have revenues by definition.

### Empty Planning

This alert is shown to you if you're not planned for tomorrow (Saturday and Sunday excluded).

### Orders / External Cost

This alert is shown to the manager of a project where the sum of orders, travels and expenses go over the budget external costs. You don't want to spend money you don't have, right?