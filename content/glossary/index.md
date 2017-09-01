---
date: 2017-05-22 17:31:29 +0200
title: Glossary
weight: 200
last: true

---
### Absolute Project Progress

This value indicates how much a project is advanced since its beginning. For example, a project with:

* Budget days: **200**;

* Last project status: **40**;

Has an absolute project progress of: **( 200 - 40 ) / 200 * 100 = 80 % .**

### Bluesky

It represents the value you think that it is missing in order to reach an hypothetical overall value. 

For example: if I have an actual value of 5 but I know that, in a particular moment in time, actual value will reach the final value of 7, then I can use a Bluesky of 2. 

This is a theoretical definition, look at the context to find more accurated information.

### Budget Consumption

This value indicates, for a project, the percentage of the budget days already used. This is calculated by comparing timesheet hours and budget days. For example, a project with:

* Budget days: **200**;

* Last week timesheet hours: **80**;

Has a budget consumption of: **80 / 200 * 100 = 40 % .**

### Expected Value

This value indicates the estimated value of a project, weighted on its probability.

### Job Order

It's a code which identifies a project inside a company, may be not unique.

### Production Value

This value indicates *how much a project has produced* at a specific moment in time. This is calculated by multiplying the project's value for the project's percentage of completion (obtained from the Project Status).For example, a project with:

* Budget days: **100**;

* Last project status: **40**;

* Project's value: **10 K**;

Has a production value of: **10 K * ( ( 100 - 40 ) / 100 )**.

### Purchase Order (PO)

It's a commercial document and first official offer issued by a buyer to a seller, indicating types, quantities, and agreed prices for products or services. It is used to control the purchasing of products and services from external suppliers.

If a seller accepts a buyer PO, a contract is created between them.

### Relative Project Progress

This value indicates how much a project is advanced between two weeks, it's calculated as the difference between the project statuses of the the two given weeks.

### Revenue Pipeline

This value is the sum of all the pipeline projects' expected value.

### Roadrunner Index (RRI)

This value indicates, for a given week, the ratio between the project's progress and [timesheet]({{< relref "friday/index.md#timesheet" >}}):

* If ratio is **greater than 1**: last week an hour of work led to a project's progress greater than one hour. This means that project advanced faster than expected;

* If ratio is **equal to 1**: last week project's progress (based on Project Status) was consistent with the worked hours (based on Timesheet);

* If ratio is **lower than 1**: last week an hour of work led to a project's progress lower than one hour. This means that project advanced slower than expected.

*The perfect managed project has a constant RRI of 1*.

### Wasted Hours

Wasted hours are generated when one of the following conditions is true:

* A person is planned on the project A but he/she doesn't work on that project at all;

* A person is planned on the project A but he/she works on the project B instead and the project B has a non chargeable [job order category]({{< relref "settings/index.md#company" >}}).