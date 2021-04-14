# evb-sfn-event-scheduler

Example SAM template for scheduling events up to a year in the future. 

To test:
* Set `myeventbus` to a valid eventbus in your account in `testevent.json` and `template.yaml`
* Set a valid future ISO-8601 date in `testevent.json`
* Run `aws events put-events --entries file://testevent.json`
* `EventFunction` lambda will log the event payload when the event is emitted at the set date


