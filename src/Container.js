import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ListIssues, ListLabels, ListComments } from './Github.js';
import Components from "./Components.js";
import Incidents from "./Incidents.js";

function Container(props) {
  const [incidents, setIncidents] = useState();
  const [components, setComponents] = useState();
  const [comments, setComments] = useState(new Map());
  const [error, setError] = useState();
  const [search] = useSearchParams();

  const incident_number = search.get('number');
  const incident_filter = search.get('filter');

  useEffect(() => {
    async function fetchData() {
      if (!incidents) {
        await ListIssues()
          .then((result) => {
            setIncidents(result.data)
          })
          .catch((error) => {
            setError(error)
          });
      }
      if (!components) {
        await ListLabels()
          .then((result) => {
            setComponents(result.data)
          })
          .catch((error) => {
            setError(error)
          });
      }
      if (incident_number !== null && comments.get(incident_number) === undefined) {
        await ListComments(incident_number)
          .then((result) => {
            setComments(new Map(comments.set(incident_number, result.data)))
          })
          .catch((error) => {
            setError(error)
          });
      }
    }
    fetchData()
    console.log(comments)
  }, [incident_number]);

  if (error != null) {
    return (
      <span class="error">Failed to load data, an error occured: ${error}</span>
    );
  }

  return (
    <div>
      <Components key="components" components={components} />
      <Incidents key="incidents" incidents={incidents} incident_number={incident_number} incident_filter={incident_filter} incident_comments={comments.get(incident_number)} />
    </div>
  );
}

export default Container;