// Example function testing that events are emitted

exports.handler = async function (event, context) {
  console.log(JSON.parse(event.Records[0].Sns.Message));
};
