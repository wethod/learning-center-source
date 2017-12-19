---
date: 2017-05-24 12:06:54 +0200
title: Finance
weight: 70

---
## Orders

In this section you can view all your orders and create new ones. Once you click on the "**Send**" button, an e-mail is sent to the address provided in the [Email Bot]({{< relref "settings/index.md#company" >}}) section.

To create a order:

1. Click on the top left "**+ order**" button and an empty order will be added to the list;
2. Compile the order's empty fields;
3. Click on the "**create**" button.

{{< note title="Note" >}}

**You can create orders only for projects you have already provided with job order and budget.**

**Order's value must be lower or equal then the external costs entered in the budget.**

{{< /note >}}

## Invoices

In this section you can view all your invoices and create new ones. Once you click on the "**Send**" button, an e-mail is sent to the address inserted in the [Email Bot]({{< relref "settings/index.md#company" >}}) section.

To create an invoice:

1. Click on the top left "**+ invoice**" button and an empty invoice will be added to the list;
2. Compile the invoice's empty fields;
3. Click on the "**create**" button.

{{< note title="Note" >}}

**You can create invoices only for projects you have already provided with job order and budget**
{{< /note >}}

## Clients

In this section you can view all your clients and create new ones.

To create a client:

1. Click on the top left "**+ client**" button and an empty client will be added to the list;
2. Compile the client's empty fields;
3. Click on the "**save**" button.

## Suppliers

In this section you can view all your suppliers and create new ones.

To create a supplier:

1. Click on the top left "**+ supplier**" button and an empty supplier will be added to the list;
2. Compile the supplier's empty fields;
3. Click on the "**save**" button.

## Production Plan

Here you can specify the amount you're planning to product for each project. 
The amount is expressed as a percentage of the project's total value.

Past months are read-only and are automatically populated with the real production, based on the given month's project status.
You can edit future months but remember: a project's production plan can be saved only if you've distributed the 100% of the production.

Each time you edit a past project status, the related production plan is recalculated in order to allocate the remaining production or to adjust inchoerent plans. The adjustments are reported as orange monthly apex.

A blue line indicates the project's duration, a dashed line instead tells you that the project's boundaries (the project start/end) are outside the visible planning's portion.
