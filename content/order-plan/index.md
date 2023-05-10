---
date: 2019-06-19T08:24:15.000+00:00
title: Order Plan
weight: "98"

---
## Overview

From here you can see the orders' amount grouped by projects.

The way you will visualise your orders depends on the preference you have specified in the [Company Settings page](/settings/index#company).

Each row in this view represents a project and carries with it the following information:

* Name, PM and client for the project
* The order's costs for the current year
* For each month you can see the planned orders' amount and the approved orders amount (coloured in grey or in red if lower than planned)
* The total planned amount for the current year

![](/uploads/2023/03/02/company-order-plan.png)

{{< note title="Note" >}} **Planned orders are those which have been sent or created, but not approved yet.** {{< /note >}}

If your company activated the [multicurrency functionality](/finance/index#currency), you can see all the currencies used for a project's orders by clicking on that project's row.

## Order Plan based on Period of Supply

If in your preferences you have **Period of Supply** the visualisation logic is the following:

* the order start month is based on the start specified when creating a new order and its end is based on  its start date + duration
* the total of the order will be therefore divided by the amount of months of supply
* if the period of supply lasts more than the project's length, you will still be able to see it in the **Company Order Plan**.
* if the period of supply ends in a different year than the current one, you will be able to see it by clicking on the year selector.

![](/uploads/2023/03/02/company-order-plan-gif.gif)

## Order Plan based on Issue Date

If in your preferences you have **Issue Date** the visualisation logic is the following:

* the order's cost will NOT be divided by the period of supply, it will be visualised in its totality under the month corresponding to the issue date (date of when you have uploaded the order)

Passing from one visualisation to an other may result in a drastic change in the yearly total, especially if you have a lot of orders that span from one year to an other. However, the way these orders are saved is always the same, only the visualisation is different, so changing between these two configurations will not result in any kind of data loss.