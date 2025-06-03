function getPastEvent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const events = [
        { year: 1990, name: "World Wide Web Invented" },
        { year: 2001, name: "Wikipedia Launched" },
        { year: 1969, name: "Moon Landing" },
        { year: 2020, name: "Global Pandemic" },
        { year: 1989, name: "Fall of Berlin Wall" }
      ];
      const randomIndex = Math.floor(Math.random() * events.length);
      resolve(events[randomIndex]);
    }, Math.random() * 1000);
  });
}

async function travelThroughHistory(N) {
  const eventPromises = Array.from({ length: N }, () => getPastEvent());
  const events = await Promise.all(eventPromises);

  const uniqueEventsMap = new Map();
  for (const event of events) {
    const key = `${event.year}-${event.name}`;
    if (!uniqueEventsMap.has(key)) {
    uniqueEventsMap.set(key, event);
   }
  }
  const uniqueEvents = Array.from(uniqueEventsMap.values());
  uniqueEvents.sort((a, b) => a.year - b.year);
  const filteredEvents = uniqueEvents.filter(event => event.year < 2000);

  return filteredEvents;
}
travelThroughHistory(10).then(result => {
    console.log("Risultato: ",result);
});