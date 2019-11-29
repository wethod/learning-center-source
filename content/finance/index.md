---
date: 2017-05-24T10:06:54.000+00:00
title: Finance
weight: "70"

---
## Orders

In this section you can see all your orders and create new ones.

To create an order:

1. Click on the top left "**+ order**" button and an empty order will be added to the list
2. Compile the required fields
3. Click on the "**create**" button

After creating an order you can send it and approve it. Once you click on the "**send**" button, an e-mail will be sent to the address provided in the settings' [Email Bot]({{< relref "settings/index.md#company" >}}) section.

When an order is sent, you still have the ability to edit it or approve it by clicking on the "**approve**" button. Approving an order isn't mandatory but can be useful if you want to keep track of what orders can be actually issued.

An approved order cannot be edited.

Order's fields description:

* **Project**: the target Project
* **Supplier**: the target Supplier for this Order
* **Purchase Code**: an identifier for the Order
* **Date**: the issue date of this Order
* **Duration**: answers to the question "when this order will used for the project?", by default uses the project's start month and duration. For example: some external employees works for you on April and May so you should set start month to April and duration of 2 months.
* **Note**: a brief text about the order. This is attached to the order's email and can be seen by your colleagues

### Currency

Orders belonging to a [multicurrency budget]({{< relref "budget/index.md#multicurrency-budget" >}}) 
are displayed with their currency. Currency can be picked between those used in the budget's external costs. The exchange rate for the currency is aligned with the last approved budget version but you can change it in any moment by editing it manually.

{{< note title="Note" >}}

**You can create orders only for projects you have already provided with job order and budget.**

**Order's value must be lower or equal then the external costs provided in the budget.**

{{< /note >}}

{{< img-center src="/uploads/2019/06/13/orders.gif" >}}

## Invoices

In this section you can see all your invoices and create new ones. Once you click on the "**Send**" button, an e-mail is sent to the address inserted in the [Email Bot]({{< relref "settings/index.md#company" >}}) section.

To create an invoice:

1. Click on the top left "**+ invoice**" button and an empty invoice will be added to the list;
2. Compile the invoice's empty fields;
3. Click on the "**create**" button.

### Currency

Invoices belonging to a [multicurrency budget]({{< relref "budget/index.md#multicurrency-budget" >}}) 
are displayed with the final net's currency. The exchange rate is aligned with the last approved budget version but you can change it in any moment by editing it manually.

{{< note title="Note" >}}

**You can create invoices only for projects you have already provided with job order and budget**
{{< /note >}}

{{< img-center src="/uploads/2019/06/13/invoices.gif" >}}

## Clients

In this section you can see all your contacts, divided into contacts and companies.

{{< img-center src="/uploads/2019/11/29/clients.gif" >}}

**To add a Contact**:

1. Go to “People” section, on the top right corner
2. Click the "**Add**" button
3. Fill in all the required fields
4. Click on the "**save**" button

Click on the arrow to open a sidebar containing all the info about a contact, if you want even more details you can reach the contact page by using the button placed at the bottom of the sidebar. 

In the contact page you can find all the projects developed with this contact and all his resources.

{{< img-center src="/uploads/2018/08/29/client-person-details.png" >}}

How to link a contact to a project? Just go to the pipeline and pick a name from the "Client Contact" field's list (if you are creating a new project ensure to select the 'Client' field first):

{{< img-center src="/uploads/2018/08/31/choose-client.gif" >}}

**To add a Company**:

1. Go to “Companies” section, on the top right corner
2. Click the "**Add**" button
3. Fill in all the required fields
4. Click on the “**save**” button

Click on a company to get more details about it: on the left of this view you can find some general information, on the right you can see listed all the compnay's contacts, all the projects developed for this company and all its resources.
A resource is just a link with a name to something external to WETHOD (like a document or a todo list).

Click on the arrow to open a sidebar containing all the info about a company, if you want even more details you can reach the company page by using the button placed at the bottom of the sidebar. 

In the company page you can find:

* 	The **invoices widget** showing all the invoices that need to be sent for that client
* 	The **revenues chart** showing all the revenues for the client in the current year or in the last three ones
* 	The **won projects** that are all the projects with a 1oo% probability for this client
* 	The **lost projects** that are all the projects with a o% probability for this client
* 	The **outstanding projects** that are all the projects with a 1oo% probability between 10% and 90% for this client
* 	The **contacts** for this client

{{< img-center src="/uploads/2019/11/29/client-details.gif" >}}

## Suppliers

In this section you can view all your suppliers and create new ones.

To create a supplier:

1. Click on the top left "**+ supplier**" button and an empty supplier will be added to the list;
2. Compile the supplier's empty fields;
3. Click on the "**save**" button.