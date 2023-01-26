---
date: 2017-05-24T10:06:54.000+00:00
title: Finance
weight: "70"

---
## Orders

In this section you can see all your orders and create new ones.

{{< img-center src="/uploads/2021/04/23/orders-list.png" >}}

### Create a new order

1. Click button _New Order_ and a sidebar will open.

{{< img-center src="/uploads/2021/04/23/order-sidebar.png" >}}

1. Insert project name. The job order will be automatically filled by the system.
2. Compile all the required fields
3. Click on the "**save**" button
4. Your order will be added to the list

### Order's fields description

* **Project**: the target Project
* **Job Order**: automatically filled selecting the project
* **Supplier**: the target Supplier for this Order
* **Purchase Code**: an identifier for the Order
* **Value**: the total cost of this Order
* **Area**: the area of the [budget]({{< relref "budget/index.md" >}}) this Order is about
* **Date**: the issue date of this Order
* **Duration**: answers to the question "when this order will used for the project?", by default uses the project's start month and duration. For example: some external employees works for you on April and May so you should set start month to April and duration of 2 months.
* **Notes**: a brief text about the order. This is attached to the order's email and can be seen by your colleagues

### Send an order

1. Click the button _Send_.
2. Choose a recipient for the order. To insert one or more email addresses as recipients head to the settings [Email Bot]({{< relref "settings/index.md#company" >}}) section.
3. The recipient will receive an email.

When an order is sent, you will need specific permissions to edit it.

Role based permissions for Orders can be managed from the [permissions section]({{< relref "settings/index.md#permissions" >}}).

A sent order can be approved.

### Approve an order

You can approve an order by clicking on the "**Approve**" button. Approving an order isn't mandatory but can be useful if you want to keep track of which orders can be actually issued.

By clicking the “Approve” button you will presented with a confirmation modal and then you can optionally send an email to notify someone. Recipients for this notification can be selected from those listed under orders [Email Bot]({{< relref "settings/index.md#company" >}}) from the settings.

{{< img-center src="/uploads/2022/09/01/approve-notification-modal-big.png" >}}

A approved order can be set as paid.

### Set order as paid

You can set an order as paid by clicking on the "**Set as paid**" button. This isn't mandatory but can be useful if you want to keep track of which orders has actually been paid.

### Currency

Orders belonging to a [multicurrency budget]({{< relref "budget/index.md#multicurrency-budget" >}})
are displayed with their currency. Currency can be picked between those used in the budget's external costs. The exchange rate for the currency refers to the budget's creation date, but you can change it in any moment by editing it manually.

Order's value must be lower or equal then the external costs provided in the budget for the currency picked for the order.

{{< img-center src="/uploads/2021/04/23/order-multicurrency.gif" >}}

### Export a spreadsheet with the list of orders:

1. Click on "Export data".
2. Choose if you want to download all data or just a list of orders belonging to a time range.
3. (Segment) Select the time range you want collect data from.
4. Click on "Email me".
5. You will receive an email with the spreadsheet with requested data.

{{< note title="Note" >}}

**You can create orders only for projects you have already provided with job order and budget.**

**Order's value must be lower or equal then the external costs provided in the budget.**

{{< /note >}}

## Invoices

In this section you can see all your invoices and create new ones. Once you click on the "**Send**" button, an e-mail is sent to the address inserted in the [Email Bot]({{< relref "settings/index.md#company" >}}) section.

To create an invoice:

1. Click on the top left "**+ invoice**" button and an empty invoice will be added to the list;
2. Compile the invoice's empty fields;
3. Click on the "**create**" button.

### Edit details

You can add more information about your invoice by clicking on the options button of the invoice.  
A window with further details will show up, letting you fill in the info you need.     
Please mind the vat rate is automatically compiled with the client's vat rate (if one has been provided).   
Once you're done, remember to click on the **save** button.

{{< img-center src="/uploads/2022/01/27/invoice-details.png" >}}
{{< img-center src="/uploads/2022/02/07/screen-shot-2022-02-07-at-16-10-23.png" >}}

### Currency

Invoices belonging to a [multicurrency budget]({{< relref "budget/index.md#multicurrency-budget" >}})
are displayed with the final net's currency. The exchange rate for the currency refers to the budget's creation date, but you can change it in any moment by editing it manually.

{{< note title="Note" >}}

**You can create invoices only for projects you have already provided with job order and budget**
{{< /note >}}

{{< img-center src="/uploads/2019/06/13/invoices.gif" >}}

## Client List

In this section you have a list of your clients meant as companies, with details like the company name and the group they belong to.

Find this section in CRM > Clients > Client list.

{{< img-center src="/uploads/2021/02/15/client_list.png" >}}

**Add a new Company**:

1. Click the "**Add**" button
2. Fill in all the required fields
3. Click on the “**save**” button

### Client company page

For each of the company listed, click on the arrow to enter the company page.

{{< img-center src="/uploads/2019/12/12/client-detail.gif" >}}

Here you can find details and insights about a client, like:

* It's [revenue clock]({{< relref "dashboard/index.md#revenue-clock" >}}) for the current year
* All the **invoices** that need to be sent for that client
* The **revenues** for the client grouped by years or quarters. Targets are displayed in orange and you can set them in the [revenues target]({{< relref "revenues/index.md#revenues-target" >}}) section
* The value of the **won projects** for the client grouped by years or quarters (click on a column to further filter the insights below on the selected time range)
* Sparklines:
  * **Won projects** that are all the projects with a 90% or 100% probability
  * **Proposals** the number of project that reached 90% (won) or went down to 0% (lost)
  * **Avg. Project Value** the average value of all the won projects
  * **Conversion Rate** the ratio between won projects and proposals
  * **Avg. Profitabilty**: the average margin of all the won projects in the selected time range
* **Won projects** that are all the projects with a 90% or 100% probability
* **Lost projects** that are all the projects with a 0% probability
* **Outstanding projects** that are all the projects with a probability between 10% and 75%
* All the **contacts** for this client

The **Won/lost feedback** shows up when you enable the related job order category's flag in the [company]({{< relref "settings/index.md#company" >}}) section.

Sparklines comes in different colors to highlight the trend:

* Red if the last value if worse than the first one
* Blue if first and last value are the same
* Green if the last value if better than the first one

## Contacts

In this section you have a list of your client's contacts with details like their name, company they belong to, email and role.

Find this section in CRM > Clients > Contacts.

{{< img-center src="/uploads/2021/02/15/contact_list.png" >}}

**Add a new client contact**:

1. Click the "**Add**" button
2. Fill in all the required fields
3. Click on the "**save**" button

### Client contact page

Click on the arrow to open the client contact page.

In the contact page you can find all the projects developed with this contact and all his resources.

A resource is just a link with a name to something external to WETHOD (like a document or a todo list).

{{< img-center src="/uploads/2018/08/29/client-person-details.png" >}}

How to link a contact to a project? Just go to the pipeline and pick a name from the "Client Contact" field's list (if you are creating a new project ensure to select the 'Client' field first):

{{< img-center src="/uploads/2018/08/31/choose-client.gif" >}}

### Intercompany client

If your company is part of a [group]({{< relref "group-setup/index.md" >}}) you can elevate some of your clients from "classical clients" to "intercompany clients".

To do so you just need to click on the arrow to open the sidebar and assign the **Intercompany ID** by selecting it from a list containing all the companies which are part of your group.

This is particularly useful when you decide to use a job order category with the ["Intercompany supplier"]({{< relref "settings/index.md#company" >}}) flag enabled.

## Suppliers

Find this section in Projects > Wallet > Suppliers

In this section you can view all your suppliers and create new ones.

{{< img-center src="/uploads/2021/06/15/supplier-list.png" >}}

To add a new supplier:

1. Click on the top left "**New supplier**" button and a sidebar will open
2. Compile the supplier's empty fields inside the sidebar
3. Click on the "**save**" button

{{< note title="Note" >}}
**You can only assign tags which was previously created in the** [**"Supplier Settings"**]({{< relref "settings/index.md#suppliers-settings" >}})**. Tags can be useful to catalogue the supplier with keywords (i.e. expertise, industry or geography)**
{{< /note >}}

### Supplier's status

It is possible to add a status that determines whether a supplier is available for contracts or not. To enable this feature and set your preferences on supplier's status, head to Settings > Company > Suppliers or learn more from ["Supplier Settings"]({{< relref "settings/index.md#suppliers-settings" >}}).

{{< note title="Note" >}}
**Orders can be sent to suppliers that are eligible for contract only.**
{{< /note >}}

### Advanced Search

By default you can search suppliers by name, email, status or tags just by typing in the search bar.

If you need something more, you can use these _search query_:

<table>
<thead>
<tr>
<th>Description</th>
<th>Query</th>
</tr>
</thead>
<tbody>
<tr>
<td>Suppliers which get at least one order for a project with client's name containing "acme"</td>
<td><i>client:acme</i></td>
</tr>
<tr>
<td>Suppliers which get at least one order for a project which name contains "new site"</td>
<td><i>project:new site</i></td>
</tr>
<tr>
<td>Suppliers with rating greater than 2</td>
<td><i>rating:2+</i></td>
</tr>
<tr>
<td>Suppliers with rating lower than 3</td>
<td><i>rating:3-</i></td>
<tr>
<td>Suppliers with rating equal to 4</td>
<td><i>rating:4</i></td>
</tr>
</tbody>
</table>

{{< note title="Note" >}}
**You can search by status only if it's enabled.**

**You can search by rating only if you have permissions to see it.**
{{< /note >}}

{{< img-center src="/uploads/2021/06/15/supplier-special-search.png" >}}

### Supplier details

Each supplier's row has got an arrow button which you can click to see supplier details.

Here you can:

* Edit details (from the sidebar)
* See all projects for which supplier get at least one order
* See, add and edit **supplier ratings**

A rating is composed by:

* A 1 to 5 numberical value, expressed as an amount of stars (required)
* A project to which rating refers (required)
* A comment to explain the rating value (not required)

Rating permissions can be managed from the [permissions section]({{< relref "settings/index.md#permissions" >}}), here you can express:

* Which roles can see rating related thing
* Which roles can create and manage their own ratings
* Which roles can delete others ratings

{{< img-center src="/uploads/2021/06/15/supplier-detail.png" >}}

{{< img-center src="/uploads/2021/06/15/supplier-sidebar.png" >}}

{{< img-center src="/uploads/2021/06/15/supplier-rating.png" >}}

From sidebar you can try to delete a supplier but, if at least an order exist for it, you need to transfer all its orders to another supplier available for contract. This process is simplified by a modal that shows you all the orders linked to the supplier you're deleting and let you pick another supplier.

{{< img-center src="/uploads/2021/06/15/supplier-move-orders.png" >}}

## Travels

Send travel requests to your travel office and download your reservation/ticket.

Find this section in Projects > Wallet > Travels.

{{< img-center src="/uploads/2020/12/21/travel_requests_list.png" >}}

### Create, edit and send travel requests

First, head to Setting > Company > Email Bot and insert the email address(es) as recipients for travel requests.

### Create a new travel request:

1. Click button _New Request_ and a sidebar will open.

{{< img-center src="/uploads/2020/12/21/travel_requests_list_sidebar.png" >}}

1. Insert project name. The job order will be automatically filled by the system.
2. Insert the main destination for this travel.
3. If needed, write the purpose of the travel (i.e. meeting with the client).
4. Choose one or more categories of travel request between train, flight, car, accommodation and other.
5. Insert the request details
6. Click _Save_.
7. Your request will be added to the list of travel requests.

### Edit a travel request:

1. Open a travel request from the list.
2. Click _Edit_ from the top right corner of the sidebar.
3. Edit your travel request.
4. Click _Save_.

Based on a specific [permission's set]({{< relref "finance/index.md#permissions" >}}), some roles are able to edit other requests even when already sent.

### Create _more than one travel request_ for the same travel category:

{{< img-center src="/uploads/2020/12/21/new_flight_category.gif" >}}

1. Open a travel request from the list or, if you are already in the sidebar, open an existing travel category request.
2. Hover with the mouse on the name of the travel category, on the top of the sidebar.
3. Click "+" to create a new travel request for the same travel catgory
4. Insert details.
5. Click _Save_.
6. Your request will be added to the list of travel requests.

### Send a travel request:

1. Click the button _Send_.
2. Choose a recipient for the request. To insert one or more email addresses as recipients head to the setting page.
3. The recipient will receive an email with a link to your travel request.
4. Travel request will be pending until the travel office accepts and confirms your request.

### Insert costs and upload a reservation for a travel request:

When a travel request has booked, you might attach the reservation file to the travel request.

 1. Head back to the travel request email by searching for the references of the email object (i.e. user name, project name, business unit).
 2. Click the button _Take me there_.
 3. Open the travel request.
 4. Access to the travel category (i.e. train, flight, accommodation) for further details.
 5. Scroll down to the "Travel Office" section at the bottom.
 6. Insert the cost of travel or accomodation
 7. Specify a payment method (if needed)
 8. Upload reservations or travel tickets.
 9. Repeat steps 5 to 8 for each of the travel categories that has a travel request.
10. Click _Save_ on the top right corner of the sidebar.
11. When all the reservations are completed and uploaded, click "Submit reservation".
12. An email with the booking confirmation will be sent to the person who made the travel request.

Who made the travel request will receive a booking confirmation email, with the link to download booking and reservation materials.

### Download travel bookings and reservations:

If you received a travel booking confirmation email you might be able to download your travel ticket or reservation.

Only circled travel categories (view image below) have reservations or tickets available to download.

{{< img-center src="/uploads/2021/01/07/travel_booked.png" >}}

Click on the travel category icon and choose the files you want to download.

or

1. Open the travel request's details.
2. Open the category of travel requested.
3. Scroll down to the bottom and download the attached files.
4. Have a good journey!

### Download a spreadsheet with the list of travel requests:

1. Click on "Download data".
2. Choose if you want to download all data or just a list of requests belonging to a time range.
3. (Segment) Select the time range you want collect data from.
4. Click on "Email me".

### Permissions

Based on different permission sets, a specific role can:
edit and view requests made by other users in the company. Find these requests in the section _Others_.

Project Managers will be able to view and edit travel requests made by other users only if linked to projects they are managing.

Permission "edit sent" enables the user to insert costs, edit and reservation files to requests that have been already sent to a travel office.

Due to privacy concerns, it is not possible to download booking and reservation files from requests made by other people.


## Expenses 

*Projects > Wallet > Expenses*

The expense reimbursement process allows employers to pay back employees who have spent their own money for business-related expenses. These types of reimbursable expenses tend to occur when employees travel for work, but can be associated with other activities related to their employment, including, for example, certain purchases of work-related supplies or tools.

{{< img-center src="/uploads/2022/08/30/expenses-list.png" >}}

All expenses are listed with the following information at display:

* Job order category badge
* Category of expense
* Requested by
* Project
* Date
* Notes
* Reimbursement value (always expressed in master currency) 

Based on [permission roles]({{< relref "settings/index.md#permissions" >}}), users can view, edit, delete their own expenses and/or others's expenses.

Users with permission to edit others' expenses can also change the owner of the expense when creating or updating it from the sidebar details.

{{< img-center src="/uploads/2022/08/30/expense-edit-owner.png" >}}

{{< note title="Note" >}}
**All expenses linked to a project are listed in the widget "Orders" in the [project report]({{< relref "reports/index.md#project-report" >}}) with a general "Expense" name, its date and value.**
{{< /note >}}

### Type of reimbursement

* **Flat-rate**: whether the type of reimbursement is a fixed value (expressed in the reimbursement *value* field, required), regardless the value of the expense. *i.e. Acme Inc. refunds each employee 12 for a lunch. Mario, who works for Acme, had a business lunch and spent 24,65. Mario will be refunded 12 by Acme Inc.*
* **Mileage/Km**: whether the type of reimbursement is a fixed value (expressed in the reimbursement *value* field, required) per mile or kilometer declared by the employee. *i.e. Acme Inc. refunds 0,40 for each km travelled. Mario, who works for Acme, made a business trip with his own car and travelled a total of 260km. Mario will be refunded 140 (260x0,40=140).*
* **Total**: whether the employer refunds the whole expense declared by the employee. *i.e. Acme Inc. refunds the total cost of a taxi trip. Wendy, in her business travel for Acme,took a taxi from London Victoria train station to the City and spent 30. Wendy will be refunded 30.*
* **Total (max value)**: whether the employer refunds the whole expense until a maximum refund value (expressed in the *reimbursement value* field, required) is reached. *i.e. Acme Inc. refunds the total cost of a dinner up to 30. Britney, an account manager at Acme, had a business dinner with her clients  and spent 250. Britney will be refunded 30.*
* **Quantity**: whether the employer refunds a fixed value per unit. *i.e. Acme Inc. refunds the 0,10 for each marker bought by an employee. Jason, a UX designer at Acme, bought 20 markers for a design workshop he conducted with a client. Jason will be refunded 2.*

### Set a category of expense
Learn how to insert categories of expenses that require a reimbursement process to pay back employees who have spent their own money for business-related expenses.

1. Head to Settings > Company > Expenses.
2. Click button _Add expense category_.
3. Choose a _name_ for the category of expense.
4. Select the check box if route details are needed.
5. Select the [type of reimbursement]({{< relref "finance/index.md#type-of-reimbursement" >}}).
6. Insert the value of reimbursement (flat-rate, per mile/km, per unit or maximum).
7. Press *Save*.

{{< img-center src="/uploads/2021/11/29/expense-category.gif" >}}

{{< note title="Note" >}}
**To avoid retroactive changes it is not permitted to edit or delete a category of expense. Archive a category to hide it from the list.**
{{< /note >}}


### How to insert a new expense

1. Head to Projects > Wallet > Expenses
2. Click button _New Expense_ and a sidebar will open.
3. Insert the name of the project linked with your expense.
4. Choose the [category of expense]({{< relref "finance/index.md#set-a-category-of-expense" >}}) from the list.
5. Insert the date in which this expense occurred.
6. If required, insert the value of expense or the amount of miles/kilometres travelled.
7.  If required, insert location _From_ - _To_.
8. Add a note.
9. If needed, upload a file that proofs your expense (i.e. a receipt)
10. Click _Save_.
11. Your expense will be added to the list.