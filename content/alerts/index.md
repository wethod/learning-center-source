---
date: 2017-06-13 18:08:29 +0200
title: Alerts
weight: 21

---
## Overview

This widget shows all the inconsistencies regarding the user. Each alert has a priority (indicated by its color):

* _Red_ alerts have an high priority and must be solved as soon as possible;
* _Yellow_ alerts have a low priority and can be seen more as advices.

Hovering the cursor over an alert will display a description of the problem.

## Yellow Alerts

### Unsent Order

This alert is shown to the project manager who has created  the orders not  to be sent yet.

_How to solve it? Just send all the waiting orders._

### Opportunity Due Date

This alert is shown to the project manager who have created an opportunity that's expiring in 3 days or that's already expired.

\*How to solve it? Transform the opportunity into a project by clicking on the "+ PROJECT"  button placed near the opportunity itself. Otherwise, if the opportunity isn't ready to became a project, just change the date in the opportunity's "Next Step" field. \*

### Project Probability / Invoice Plan

This alert is shown to the project manager of a project which has:

* **An [invoice plan]({{< relref "pipeline/index.md#invoice plan" >}}) manually set;**
* **A probability lower than 90%.**

A project is considered active when its probability reaches 90%, only when this happens makes sense to think about creating a invoice plan.

_How to solve it_? Leave the invoice plan set to "Auto" until your ptoject hits the 90% of probability.

### Budget Submitted

This alert is shown if you have the permission to approve budgets and there's a budget waiting for approval.

_How to solve it_? Approve the waiting budget.

### Budget Consumption Too Fast

This alert is shown if you’re the manager of a project where the [budget consumption]({{< relref "glossary/index.md##budget-consumption" >}}) is more than 20% greater than the project's [progress]({{< relref "glossary/index.md#absolute-project-progress" >}}).

{{< img-center src="/uploads/2017/08/28/budget_cons_too_fast.png" >}}

This means you're consuming too many days and, if you don't fix this situation, you will be soon run out of budget days.
This can have two main causes:

* Somebody has done something wrong with the timesheet;
* The project manager has done an incorrect project status.

_How to solve it_? Talk to your teammates in order to find why timesheets and project status differ so much. Once you've find the problem, edit the timesheet or the project status which is causing it.

### Budget Consumption Too Slow

This alert is shown if you're manager of a project where the [budget consumption]({{< relref "reports/index.md#budget-consumption" >}}) is more than 20% lower than the project's [progress]({{< relref "glossary/index.md#absolute-project-progress" >}}).

{{< img-center src="/uploads/2017/08/28/budget_cons_too_slow.png" >}}

This means you've planned too many days and, if you don't fix this situation, you will reach the end of the project with a lot of budget days left.
This can have two main causes:

* Somebody has done some wrong timesheet;
* The project manager has done an incorrect project status.

_How to solve it? Talk to your teammates in order to find why timesheets and project status differ so much. Once you've find the problem, edit the timesheet or the project status which is causing it._

### Project Status / Archived

This alert is shown if you're manager of a finished project which isn't already been archived.

\*How to solve it? Archive your projects when their project status reach 0. \*

### Project Probability / Budget

This alert is shown if you're manager of a project with probability greater than 50% and with budget missing or still in draft.

_How to solve it_?  Lower the probability or ask your supervisor to approve the budget.

### Planning or Timesheet but Probability < 90%

This alert is shown if you're manager of a project with probability lower than 90% but which already have planning and/or timesheets assigned.

Remember that a project is considered active only if it has a probability greater or equal to 90%.
For a project that is not active yet, there's no need to plan resources or to register a timesheet.

\*How to solve it? Increase project's probability or delete plannend hours and timesheets for the project itself. \*

### Planning > Project Status

This alert is shown if you're manager of a project for which are planned (in the future) more days than the last project status days. What's the meaning of requiring more resources than what you really need?

_How to solve it_? Make project's planning and last project status to be consistent each other.

### Client PO

This alert is shown to the project manager if one of the following situations happens:

* Project has probability of 100% and there isn't a Purchase Order set for the project;
* Project has some invoices but there isn't a Purchase Order set for the project;
* A Purchase Order is set for the project despite its probability is lower than 100%.

_How to solve it_? Add a PO once a project reach 100% of probability, add invoices only to projects that already have a PO.

### Project Start

This alert is shown to the project manager if one of the following situations happens:

* A project is started but its probability is lower than 90%;
* A project is going to start during the current month but its probability is lower than 75%.

Remember: a project is considered started if it has a start date in the past or if someone has submitted timesheets for it.

\*How to solve it? If a project is going to start during the current month, increase its probability to 90%. Change the start date otherwise. \*

### Project Status

This alert is shown if you're manager and you've forgot to update a project's status in the last two weeks.
A project status is required for a given week only if at least a timesheet has been submitted for that week.

_How to solve it_? Provide the missing project statuses.

### Timesheet

This alert is shown to the employee of a project who forgot to submit the timesheet in the last two weeks.

_How to solve it_? Do the missing timesheets.

## Red Alerts

### Project Duration / Timesheet

This alert is shown to the manager of a project which has some timesheets done before the start date or after the end date.

_How to solve it_? Delete the timesheets done before the start date or after the end date. Otherwise extend the project duration _so it will include_ all the project status done.

### Invoice Plan / Budget Final Net Price

This alert is shown to the manager of a project if the following situations happen:

* The invoice plan is set as manual;
* Invoice plan's total amount and final net price  mismatch.

This can happen when you edit a budget after setting invoice plan as manual.

_How to solve it_? Make invoice plan and final net price match.

### Job Order / Project Probability

This alert is shown to the manager of a project if one of the following situations happens:

* The probability is greater than 90% but the project hasn't a job order;
* The probability si lower than 90% and the project has a job order.

Remind: only active projects (which means projects with a probability greater or equal to 90%) must have a [job order]({{< relref "glossary/index.md#job-order" >}})

_How to solve it_? Assign job order only to active projects.

### Planning / Project End

This alert is shown to the manager of a project which has planned even more people to the project, even after the end date.

In other words: the project is over, you have no reason to plan people on it.

_How to solve it_? Remove planned people assigned to ended projects.

### Planning / Budget Status

This alert is shown to the manager of a project which has planned future resources but hasn't an approved [budget]({{< relref "budget/index.md#budget" >}})

The planned resources say that the project is active but the budget is not approved, so the alert will remind you to approve it as soon as possible.You cannot plan resources if you haven’t got a budget  which gives you the right to do it.

_How to solve it_? Ask your supervisor to approve the budget.

### Non Chargeable / Budget Final Net Price

This alert is shown to the manager of a non chargeable project which has a final net price greater than zero. This is a paradox because non chargeable project can't have revenues by definition.

_How to solve it_? If the project is really non chargeable, set its final net price to zero. Otherwise change the project's type to a chargeable one.

### Empty Planning

This alert is shown to you if you're not planned for tomorrow (Saturday and Sunday excluded).

_How to solve it_? Ask the project managers in your team to fill your planning.

### Orders / External Cost

This alert is shown to the manager of a project where the sum of orders, travels and expenses go over the [budget external cost]({{< relref "budget/index.md#budget external cost" >}}).

You don't want to spend money you don't have, do you? You do not have to go over the budget!

_How to solve it_? Review your expenses or increase the external cost for your project.

### Production Plan / Project Duration

This alert is shown when there is a mismatch between the ProductionPlan data and the Project duration, you could be in one of the following scenery:

* The ProductionPlan on the first or last month of the Project lifespan is set to 0. This is a no sense, the project could start one month later or end one month earlier respectively.
* There is a ProductionPlan before the project start or after the project end.

### Production Plan Correction

A Project has this Alert if the 'correction' applied on the future ProductionPlan if greater than 10%. A 'correction' is the difference between what you planned for a past month and what the Production came to be.