---
date: 2017-08-29T08:41:03.000+00:00
title: Payroll
weight: "93"

---
## Overview

Here you can manage your employees' salary and all the other related costs.

### Totals

First thing that you see is a table which shows, by month and for the selected year, the company's headcount and the sum of costs related to payroll.

The sum of costs are displayed in the **Total** row, they're a combination of costs coming from [placeholders](/payroll/index/#placeholders), [employees](/payroll/index/#employees) and [adjustments](/payroll/index/#cost-adjustments).

The **Headcount** shows the amount of [employees](/payroll/index/#employees) and [placeholders](/payroll/index/#placeholders) with costs that impact on the company for the selected year.

![](/uploads/2021/03/15/payroll-totals.png)

### Placeholders

Here you can list all the employees you plan to hire in the future. 
Are you thinking about a new business analyst? Create a new placeholder and type in what you think the salary, taxes and duration could be. As soon as you stop typing you will see the updated totals and this can help you appreciate how the new figure will impact your business, just add new fake salaries and see if your revenues are still healthy.

Monthly values in the past are highlighted to remind you that a placeholder is not taken into account for totals calculations: a placeholder is a plan and a plan in the past makes no sense.

{{< note title="Note" >}}
**Each placeholder has at least a segment, if you delete the last segment the relative placeholder will be deleted.**

**It is not possible to save a new segment until you fill all the required fields.**
{{< /note >}}

![](/uploads/2021/03/15/payroll-placeholders.png)

### Cost adjustments

Here you can manage all the employees' related expenses that are not directly connected to a particular employee or placeholder.
For example, this is the right place to see how salary bonuses can impact your company.

There's no headcount here because we're talking about costs, not people.

{{< note title="Note" >}}
**Each cost adjustment has at least a segment, if you delete the last segment the relative placeholder will be deleted.**

**It is not possible to save a new segment until you fill all the required fields.**
{{< /note >}}

![](/uploads/2021/03/15/payroll-adjustments.png)

### Employees

Here's the employees' salary for the current year.

Each *Employee* has at least a **segment** which represents a work contract between that employee and the company. Every segment has:

* **Start month**

* **End month**

* **Gross monthly salary**

* **Taxes**

* **Business Unit** (Available only if the [module](/settings/index#business-unit) Business Unit is enabled)

You can access the segments for a specific employee just by clicking on the employee's row. Each time you edit a list of the segments, this influences the employee's *salary distribution*: a line where all segments are visually represented, allowing you to quickly understand how many times the salary of an employee is changed during the year.


Use the **Reset payroll** button take all payroll's rows down to zero, once done you can use the **Import payroll** button to copy all the payroll's rows from the previous year.

{{< note title="Note" >}}

**It is not possible to delete the last segment of an Employee.**

**It is not possible to save a new segment until you fill all the required fields.**
{{< /note >}}

![](/uploads/2021/03/15/payroll-employees.gif)