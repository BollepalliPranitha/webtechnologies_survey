import React from "react";

function Taxonomy() {
  return (
    <section id="taxonomy">
      <h2>Taxonomy of Papers</h2>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Paper 1</th>
            <th>Paper 2</th>
            <th>Paper 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Problem Domain</td>
            <td>AI Challenges</td>
            <td>Machine Learning</td>
            <td>Big Data</td>
          </tr>
          <tr>
            <td>Solutions</td>
            <td>Algorithm A</td>
            <td>Methodology B</td>
            <td>Framework C</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Taxonomy;
