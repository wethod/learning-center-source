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

**Add a new Contact**:

1. Go to “Contact” section, on the top right corner
2. Click the "**Add**" button
3. Fill in all the required fields
4. Click on the "**save**" button

Click on the arrow to open a sidebar containing all the info about a contact, if you want even more details you can reach the contact page by using the button placed at the bottom of the sidebar.

In the contact page you can find all the projects developed with this contact and all his resources.

{{< img-center src="/uploads/2018/08/29/client-person-details.png" >}}

How to link a contact to a project? Just go to the pipeline and pick a name from the "Client Contact" field's list (if you are creating a new project ensure to select the 'Client' field first):

{{< img-center src="/uploads/2018/08/31/choose-client.gif" >}}

**Add a new Company**:

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

### Intercompany client

If your company is part of a [group]({{< relref "group-setup/index.md" >}}) you can elevate some of your clients from "classical clients" to "intercompany clients".

To do so you just need to click on the arrow to open the sidebar and assign the **Intercompany ID** by selecting it from a list containing all the companies which are part of your group.

This is particularly useful when you decide to use a job order category with the ["Intercompany supplier"]({{< relref "settings/index.md#company" >}}) flag enabled.

## Suppliers

Find this section in Projects > Wallet > Suppliers

In this section you can view all your suppliers, create new ones or browse by name, email, status or tags.

{{< img-center src="/uploads/2020/10/09/supplier_list.png" >}}

{{< img-center src="/uploads/2020/10/09/supplier_list_cassetto.png" >}}

To add a new supplier:

1. Click on the top left "**New supplier**" button and a sidebar will open;
2. Compile the supplier's empty fields inside the sidebar;
3. Assign tags to catalogue the supplier with keywords (i.e. expertise, industry or geography) by selecting them from the list in the field "Tag". To add tags to the list go to the  ["Supplier Settings"]({{< relref "settings/index.md#suppliers-settings" >}}) page or go from the navigation menu to Settings > Company > Suppliers.
4. Click on the "**save**" button.

To filter the list with multiple search queries, insert the keywords between commas:

{{< img-center src="/uploads/2020/10/09/tag_search_supplier.gif" >}}


### Supplier's status

It is possible to add a status that determines whether a supplier is eligible for contracts or not. To enable this feature and set your preferences on supplier's status, head to Settings > Company > Suppliers or learn more from ["Supplier Settings"]({{< relref "settings/index.md#suppliers-settings" >}}).

**Remember: Orders can be sent to suppliers that are eligible for contract only.**


## Travels

Send travel requests to your travel office and download your reservation/ticket.

Find this section in Projects > Wallet > Travels.

{{< img-center src="/uploads/2020/12/21/travel_requests_list.png" >}}


### Create, edit and send travel requests

First, head to Setting > Company > Email Bot and insert the email address(es) as recipients for travel requests. 


**Create a new travel request:**

1. Click button *New Request* and a sidebar will open.

{{< img-center src="/uploads/2020/12/21/travel_requests_list_sidebar.png" >}}

2. Insert project name. The job order will be automatically filled by the system.

3. Insert the main destination for this travel.

4. If needed, write the purpose of the travel (i.e. meeting with the client).

5. Choose one or more categories of travel request between train, flight, car, accommodation and other.

6. Insert request details

7. Click *Save*. 

8. Your request will be added to the list of travel requests.  


**Edit a travel request:**

1. Open a travel request from the list.

2. Click *Edit* from the top right corner of the sidebar.

3. Edit your travel request.

4. Click *Save*.

Based on a specific permission's set some roles are able to edit other requests even when already sent. To learn more go to *Permissions* at the bottom of this chapter.


**Create more than one travel request for the same travel category:**

{{< img-center src="/uploads/2020/12/21/add_new_flight_request.gif" >}}

1. Open a travel request from the list or open a travel category if already in the sidebar.

2. Hover with the mouse on the name of the travel category, on the top of the sidebar.

3. Click "+" to create a new travel request for the same travel catgory

4. Insert details.

5. Click *Save*. 

6. Your request will be added to the list of travel requests.  


**Send a travel request:**

1. Click the button *Send*.

2. Choose a recipient for the request. To insert one or more email addresses as recipients head to the setting page.

3. The recipient will receive an email with a link to your travel request.

4. Travel request will be pending until the travel office accepts and confirms your request.


**Confirm a travel booking and upload reservations:**

When a travel request is finally booked, head back to the travel request email by searching for the references in the object (i.e. user name, project name, business unit).

1. Click the button *Take me there*.

2. Open the travel request.

3. Access each of the travel categories requested for further details. Scroll down to the bottom, insert the total cost and upload reservations or travel tickets. Repeat this with each of the travel categories requested.

6. Click *Save* from the top right corner of the sidebar.

7. When all the reservations are completed and uploaded, click "Submit reservation".

8. An email with the booking confirmation will be sent to the person who made the travel request.

Who made the travel request will receive a booking confirmation email, with the link to download booking and reservation materials.


**Download travel bookings and reservations:**

If you received a travel booking confirmation email

1. Head to the confirmed travel request by clicking *Take me there*.

2. Open the travel request's details.

3. Open the category of travel requested.

3. Scroll down to the bottom and download files attached.

4. Have a good journey!


**Permissions**

Based on different permission sets, a specific role can:
edit and view requests made by other users in the company. Find these requests in the section *Others*.

Project Managers will be able to view and edit travel requests made by other users only if linked to projects they are managing. 

Permission "edit sent" enables the user to insert costs, edit and reservation files to requests that have been already sent to a travel office.

Due to privacy concerns, it is not possible to download booking and reservation files from requests made by other people.