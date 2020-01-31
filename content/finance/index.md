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
are displayed with their currency. Currency can be picked between those used in the budget's external costs. The exchange rate for the currency refers to the budget's creation date, but you can change it in any moment by editing it manually.

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
are displayed with the final net's currency. The exchange rate for the currency refers to the budget's creation date, but you can change it in any moment by editing it manually.

{{< note title="Note" >}}

**You can create invoices only for projects you have already provided with job order and budget**
{{< /note >}}

{{< img-center src="/uploads/2019/06/13/invoices.gif" >}}

## Clients

In this section you can see all your clients, divided into contacts and companies.

{{< img-center src="/uploads/2019/11/29/clients.gif" >}}

**To add a Contact**:

1. Go to “Contact” section, on the top right corner
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

### Client Details

{{< img-center src="/uploads/2019/12/12/client-detail.gif" >}}

Here you can find details and insights about a client, like:

* 	It's [revenue clock]({{< relref "dashboard/index.md#revenue-clock" >}}) for the current year
*	All the **invoices** that need to be sent for that client
* 	The **revenues** for the client grouped by years or quarters. Targets are displayed in orange and you can set them in the [revenues target]({{< relref "revenues/index.md#revenues-target" >}}) section
* 	The value of the **won projects** for the client grouped by years or quarters (click on a column to further filter the insights below on the selected time range)
*   Sparklines:
	* 	**Won projects** that are all the projects with a 90% or 100% probability
    * 	**Proposals** the number of project that reached 90% (won) or went down to 0% (lost)
    * 	**Avg. Project Value** the average value of all the won projects
    * 	**Conversion Rate** the ratio between won projects and proposals
    * 	**Avg. Profitabilty**: the average margin of all the won projects in the selected time range
* 	**Won projects** that are all the projects with a 90% or 100% probability
* 	**Lost projects** that are all the projects with a 0% probability
* 	**Outstanding projects** that are all the projects with a probability between 10% and 75% 
* 	All the **contacts** for this client

The "Won/lost feedback" column shows the feedback that project managers give when a project reaches 90% or goes to 0% of probability. The available feedback can be set from the [company]({{< relref "settings/index.md#company" >}}) page.

Sparklines comes in different colors to highlight the trend:

- Red if the last value if worse than the first one
- Blue if first and last value are the same
- Green if the last value if better than the first one

### Intercompany client

If your company is part of a [group]({{< relref "group-setup/index.md" >}}) you can elevate some of your clients from "classical clients" to "intercompany clients".

To do so you just need to click on the arrow to open the sidebar and assign the **Intercompany ID** by selecting it from a list containing all the companies which are part of your group.

This is particularly useful when you decide to use a job order category with the ["Intercompany supplier"]({{< relref "settings/index.md#company" >}}) flag enabled.

## Suppliers

In this section you can view all your suppliers and create new ones.

To create a supplier:

1. Click on the top left "**+ supplier**" button and an empty supplier will be added to the list;
2. Compile the supplier's empty fields;
3. Click on the "**save**" button.