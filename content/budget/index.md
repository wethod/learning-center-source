---
date: 2017-05-26 13:04:19 +0200
title: Budget
weight: 31

---
## Overview

The budget is where you can list all the resources you think you'll need for the project.

{{< img-center src="/uploads/2017/08/28/budget-giftop.gif">}}

Basically, this is the place where you try define (for a project):

* How many people you need;

* Which experience levels you need;

* Which tasks are needed to get the job done;

* Who will do what;

* The external costs;

* The selling price.

Done? Now the budget must be approved by a supervisor and, once approved, the project manager can start [planning]({{< relref "planning/index.md" >}}) and creating [orders]({{< relref "finance/index.md#orders" >}}).

{{< note title="Note" >}}
When a project reach 50% of probability, it's a good practice to make a budget for it.
{{< /note >}}

## The Structure

The budget section is composed by three main parts: header, body and price's detail.

{{< img-center src="/uploads/2017/08/28/Budgetbody.png">}}

### The Header

Positioned on the top, this part shows the sum of the values for each column:

* The first columns shows how many work days you need for each [user level]({{< relref "settings/index.md#company" >}});

* **Ext C**. shows the sum of the _external costs_;

* **Days** shows the total amount of budget's days inserted;

* **Cost** is the sum of each budget's day multiplied for the cost of the user level which will take care of it, this value is also called _internal costs_;

* **Price** is the suggested price we think is good to sell your project.

### The Body

This is the most visible part and it's basically a table where you can assign days of a given user level to a task.

A _task_ is a macro activity needed to complete the project, related tasks can be grouped into _areas_.

You can add new areas by using the "**+ AREA**" button: you can choose to add a default area or you can create a new one by typing its name.

For each external cost you can assign a **markup**: a percentage that indicates how much you want to earn on the external costs of the project.

### The Price's Detail

Positioned on the right, this part shows some details about the project's price:

* **Suggested net price**: the price we think is good to sell your project, calculated on the costs;

* **Final net price**: regardless of the _suggested net price_ , you can decide on your own what you think is the best price for the project;

* **Discount**: the percentage of discount you want to apply to the final price;

* **Margin**: the difference between suggested net price and the costs;

* **Contingency**: life is unpredictable and the unexpected is behind every corner, so why not be be prepared for it? A percentage of contingency means that you know your budget isn’t perfect so you’re estimating more days to use, just in case. The contingency gives you more days which you can use with every user level but, on the other hand, the suggested net price will grow.

## The Workflow

1. Select a project from the [Pipeline](/pipeline/index/) and click on its budget button;

2. Compile the budget;

3. Submit the budget for approval by clicking on the top left button "**submit for approval**";

4. When the budget is approved by a supervisor, you will be able to [plan](/planning/index/) some resource on the project and start working on it;

5. Whenever you need to modify the budget, you can set it back to draft and restart from point **3**. Each time a new budget version is approved, it's saved and you can access it through the dropdown list under the Price's Detail panel.

## Project Status Correction

When a Budget is approved you have the possibility to automatically update the Project Status accordingly to the new Budget's days amount.

The new Project Status value is calculated by adding to the last one the difference between the last Budget days and new Budget days. You can access this functionality from the "more options" button on the right columns of the Budget.

{{< img-center src="/uploads/2017/06/22/project_status_correction.png" >}}

{{< img-center src="/uploads/2017/06/22/correction_modal.png" >}}