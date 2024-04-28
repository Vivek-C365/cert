import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/user/csList/'); // Replace 'YOUR_BACKEND_URL' with the actual URL of your Django backend
      const jsonData = await response.json();
      setData(jsonData[0]); // Assuming you're fetching a single object, change the index if you're fetching an array of objects
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (

    <div>
    <h2>{data.certificate.certificate_title}</h2>
    <p>{data.certificate.description}</p>
    <h2>{data.certificate.certificate_title}</h2>

      <h2>{data.know_more_title}</h2>
      <p>{data.learning_overview_desc}</p>

      <h3>Certification Overview</h3>
      <ul>
        {data.certification_overview.map(item => (
          <li key={item.title}>
            <strong>{item.title}:</strong> {item.description}
          </li>
        ))}
      </ul>

      <h3>Delivery Methods</h3>
      {data.Delivery_Methods.map(method => (
        <div key={Object.keys(method)[0]}>
          <h4>{method[Object.keys(method)[0]].title}</h4>
          <ul>
            {method[Object.keys(method)[0]].list.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{method[Object.keys(method)[0]].timeliness}</p>
        </div>
      ))}

      <h3>Steps</h3>
      <ol>
        {data.steps.map(step => (
          <li key={step.label}>
            <strong>{step.label}:</strong> {step.description}
          </li>
        ))}
      </ol>

      <h3>Enterprise Solutions</h3>
      <ul>
        {data.Enterprise_Solutions.map(solution => (
          <li key={solution.title}>{solution.title}</li>
        ))}
      </ul>

      <h3>FAQs</h3>
      {data.faqs.map(faq => (
        <div key={faq.Title}>
          <h4>{faq.Title}</h4>
          <ul>
            {faq.list.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3>Learning Outcomes</h3>
      <ul>
        {data.learning_outcomes[0].description.map(outcome => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>

      <h3>Certification Steps</h3>
      <ol>
        {data.certificationSteps.map(step => (
          <li key={step.title}>
            <strong>{step.title}:</strong> {step.description}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
