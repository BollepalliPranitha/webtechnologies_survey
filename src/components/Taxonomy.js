import React from "react";
import './taxonomy.css'; 
function Taxonomy() {
  const papers = [
    {
      name: "The Performance and Future of QUIC Protocol",
      domain: "Latency",
      approach: "Optimization Theory",
      protocol: "QUIC",
      methodology: "Theoretical Analysis",
      application: "Web-based Browsing",
      findings: "QUIC reduces significantly in high-latency networks."
    },
    {
      name: "Hypertext Transfer Protocol Version 2 (HTTP/2)",
      domain: "Latency",
      approach: "Stream Multiplexing",
      protocol: "HTTP/2",
      methodology: "Simulation",
      application: "General Web Content Delivery",
      findings: "HTTP/2 improves upon HTTP/1.1 through stream multiplexing."
    },
    {
      name: "Assessing the Interplay Between WebRTC and QUIC Congestion Control Algorithms",
      domain: "Congestion Control",
      approach: "Control Theory",
      protocol: "WebRTC, QUIC",
      methodology: "Experimental",
      application: "Real-Time Video Streaming",
      findings: "QUIC improves WebRTC performance in poor network conditions."
    },
    {
      name: "Implementation and Analysis of Real-Time Streaming Protocols",
      domain: "Real-Time Communication",
      approach: "System Implementation",
      protocol: "WebRTC, RTSP",
      methodology: "Real-World Prototyping",
      application: "Video Conferencing",
      findings: "WebRTC outperforms RTSP in mobile streaming environments."
    },
    {
      name: "Robust QUIC-Based Signaling for WebRTC",
      domain: "Reliability, Packet Loss",
      approach: "Protocol Design",
      protocol: "WebRTC, QUIC",
      methodology: "Simulation and Real-World Test",
      application: "Peer-to-Peer Video Communication",
      findings: "QUIC-based signaling improves WebRTC reliability."
    },
    {
      name: "Cross-Protocol Unfairness Between Adaptive Streaming over HTTP/2 and QUIC",
      domain: "Congestion Control, Fairness",
      approach: "Mixed Traffic Optimization",
      protocol: "HTTP/2, QUIC",
      methodology: "Simulation",
      application: "Mixed Protocol Networks",
      findings: "QUIC outperforms HTTP/2 in mixed-protocol environments."
    },
    {
      name: "Beyond QUIC v1: A First Look at Recent Transport Layer IETF Standardization Efforts",
      domain: "Multipath Support",
      approach: "Protocol Extension",
      protocol: "QUIC",
      methodology: "Simulation",
      application: "Multipath Streaming",
      findings: "QUIC multipath extension improves reliability and bandwidth usage."
    },
    {
      name: "TCP Fast Open",
      domain: "Latency",
      approach: "TCP Fast Open",
      protocol: "TCP, QUIC",
      methodology: "Theoretical Analysis",
      application: "General Web Browsing",
      findings: "TCP Fast Open reduces handshake latency but is still outperformed by QUIC."
    },
    {
      name: "A Survey on Video Streaming in Multipath Environments",
      domain: "Bandwidth Aggregation",
      approach: "Multipath Techniques",
      protocol: "MPTCP, QUIC",
      methodology: "Simulation",
      application: "Mobile Streaming",
      findings: "Multipath techniques enhance bandwidth utilization and reliability."
    },
    {
      name: "Machine Learning at the Mobile Edge: The Case of Dynamic Adaptive Streaming over HTTP (DASH)",
      domain: "Video Streaming",
      approach: "Reinforcement Learning",
      protocol: "DASH, HTTP/2",
      methodology: "Simulation",
      application: "Video on Demand",
      findings: "Reinforcement learning optimizes video quality in varying network conditions."
    },
    {
      name: "The Challenges and Limitations of QUIC Protocol Adoption",
      domain: "Firewall Traversal",
      approach: "Protocol Modifications",
      protocol: "QUIC",
      methodology: "System Implementation",
      application: "Corporate Networks",
      findings: "QUIC firewall traversal can be improved by distinguishing QUIC traffic from UDP."
    },
    {
      name: "The QUIC Transport Protocol: Design and Internet-Scale Deployment",
      domain: "Latency, Congestion Control",
      approach: "Forward Error Correction",
      protocol: "QUIC, HTTP/3",
      methodology: "Theoretical Analysis",
      application: "General Web Content Delivery",
      findings: "FEC reduces packet loss in congested networks, improving latency."
    },
    {
      name: "WebRTC and Real-Time Communication",
      domain: "Video Streaming",
      approach: "Adaptive Bitrate Streaming",
      protocol: "WebRTC, DASH",
      methodology: "Real-World Testing",
      application: "Real-Time Video",
      findings: "WebRTC provides better performance under fluctuating network conditions than DASH."
    },
    {
      name: "Optimizing Mobile Streaming over QUIC",
      domain: "Reliability",
      approach: "Protocol Tuning",
      protocol: "QUIC, HTTP/2",
      methodology: "System Implementation",
      application: "Mobile Networks",
      findings: "Tuned QUIC protocol enhances connection stability in mobile environments."
    },
    {
      name: "Point Cloud Streaming over HTTP/2",
      domain: "3D Streaming",
      approach: "HTTP/2 Stream Multiplexing",
      protocol: "HTTP/2",
      methodology: "System Implementation",
      application: "3D Point Cloud Streaming",
      findings: "HTTP/2's stream multiplexing is well-suited for high-bandwidth 3D data."
    },
    {
      name: "WebRTC: An Analysis of Low-Latency Streaming",
      domain: "Latency, Congestion Control",
      approach: "Heuristic Algorithms",
      protocol: "WebRTC",
      methodology: "Simulation",
      application: "Real-Time Communication",
      findings: "WebRTC's congestion control benefits from heuristic algorithms."
    },
    {
      name: "QUIC and TCP in Mixed Protocol Networks",
      domain: "Mixed Protocol Fairness",
      approach: "Differential Bandwidth Allocation",
      protocol: "QUIC, HTTP/2",
      methodology: "Experimental",
      application: "Mixed Protocol Networks",
      findings: "Fairness issues arise between TCP-based and UDP-based protocols."
    },
    {
      name: "Multipath QUIC for Edge Computing",
      domain: "Bandwidth Optimization",
      approach: "Multipath Bandwidth Aggregation",
      protocol: "QUIC, HTTP/3",
      methodology: "Simulation and Real-World Test",
      application: "Mobile and Edge Computing",
      findings: "QUIC’s multipath feature optimizes bandwidth usage across multiple connections."
    },
    {
      name: "Predicting Network Conditions for Streaming Optimization",
      domain: "Video Quality",
      approach: "Machine Learning",
      protocol: "DASH, QUIC",
      methodology: "Simulation",
      application: "Video Streaming",
      findings: "Machine learning improves video streaming quality by predicting network conditions."
    },
    {
      name: "Dynamic Adaptive Streaming Over QUIC",
      domain: "Congestion Control",
      approach: "Adaptive Algorithms",
      protocol: "QUIC",
      methodology: "Simulation",
      application: "Low-Latency Streaming",
      findings: "Adaptive congestion control in QUIC enhances streaming under fluctuating bandwidth."
    },
    {
      name: "Security Mechanisms for QUIC Traffic",
      domain: "Security",
      approach: "Anomaly Detection",
      protocol: "QUIC",
      methodology: "Theoretical Analysis",
      application: "Corporate Networks",
      findings: "Anomaly detection techniques enhance security in QUIC traffic."
    }
  ];
  return (
    <section id="taxonomy">
      <h2>Taxonomy of Papers</h2>

      {/* Table layout for desktop */}
      <div className="taxonomy-table">
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Paper Name</th>
              <th>Problem Domain</th>
              <th>Solution Approach</th>
              <th>Protocol Focus</th>
              <th>Evaluation Methodology</th>
              <th>Application Domain</th>
              <th>Key Findings</th>
            </tr>
          </thead>
          <tbody>
            {papers.map((paper, index) => (
              <tr key={index}>
                <td>{paper.name}</td>
                <td>{paper.domain}</td>
                <td>{paper.approach}</td>
                <td>{paper.protocol}</td>
                <td>{paper.methodology}</td>
                <td>{paper.application}</td>
                <td>{paper.findings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for mobile */}
      <div className="taxonomy-cards">
        {papers.map((paper, index) => (
          <div key={index} className="paper-card">
            <h3>{paper.name}</h3>
            <p><strong>Problem Domain:</strong> {paper.domain}</p>
            <p><strong>Solution Approach:</strong> {paper.approach}</p>
            <p><strong>Protocol Focus:</strong> {paper.protocol}</p>
            <p><strong>Evaluation Methodology:</strong> {paper.methodology}</p>
            <p><strong>Application Domain:</strong> {paper.application}</p>
            <p><strong>Key Findings:</strong> {paper.findings}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Taxonomy;