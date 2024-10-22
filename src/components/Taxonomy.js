import React from "react";

function Taxonomy() {
  return (
    <section id="taxonomy">
      <h2>Taxonomy of Papers</h2>
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
        <tr>
            <td>Tde Performance and Future of QUIC Protocol</td>
            <td>Latency</td>
            <td>Optimization Tdeory</td>
            <td>QUIC</td>
            <td>Theoretical Analysis</td>
            <td>Web-based Browsing</td>
            <td>QUIC reduces significantly in high-latency networks.</td>
          </tr>
          <tr>
            <td>Hypertext Transfer Protocol Version 2 (HTTP/2)</td>
            <td>Latency</td>
            <td>Stream Multiplexing</td>
            <td>HTTP/2</td>
            <td>Simulation</td>
            <td>General Web Content Delivery</td>
            <td>HTTP/2 improves upon HTTP/1.1 tdrough stream multiplexing.</td>
          </tr>
          <tr>
            <td>Assessing tde Interplay Between WebRTC and QUIC Congestion Control Algoritdms</td>
            <td>Congestion Control</td>
            <td>Control Theory</td>
            <td>WedRTC, QUIC</td>
            <td>Experimental</td>
            <td>Real-Time Video Streaming</td>
            <td>QUIC improves WebRTC performance in poor network conditions.</td>
          </tr>
          <tr>
            <td>Implementation and Analysis of Real-Time Streaming Protocols</td>
            <td>Real-Time Communication</td>
            <td>System Implementation</td>
            <td>WebRTC, RTSP</td>
            <td>Real-World Prototyping</td>
            <td>Video Conferencing</td>
            <td>WebRTC outperforms RTSP in mobile streaming environments.</td>
          </tr>
          <tr>
            <td>Robust QUIC-Based Signalling for WebRTC</td>
            <td>Reliability, Packet Loss</td>
            <td>Protocol Design</td>
            <td>WebRTC, QUIC</td>
            <td>Simulation and Real-World Test</td>
            <td>Peer-to-Peer Video Communication</td>
            <td>QUIC-based signaling improves WebRTC reliability.</td>
          </tr>
          <tr>
            <td>Cross-Protocol Unfairness Between Adaptive Streaming over HTTP/2 and QUIC</td>
            <td>Congestion Control, Fairness</td>
            <td>Mixed Traffic Optimization</td>
            <td>HTTP/2, QUIC</td>
            <td>Simulation</td>
            <td>Mixed Protocol Networks</td>
            <td>QUIC outperforms HTTP/2 in mixed-protocol environments</td>
          </tr>
          <tr>
            <td>Beyond QUIC v1: A First Look at Recent Transport Layer IETF Standardization Efforts</td>
            <td>Multipatd Support</td>
            <td>Protocol Extension</td>
            <td>QUIC</td>
            <td>Simulation</td>
            <td>Multipatd Streaming</td>
            <td>QUIC multipatd extension improves reliability and bandwidtd usage.</td>
          </tr>
          <tr>
            <td>TCP Fast Open</td>
            <td>Latency</td>
            <td>TCP Fast Open</td>
            <td>TCP, QUIC</td>
            <td>Tdeoretical Analysis</td>
            <td>General Web Browsing</td>
            <td>TCP Fast Open reduces handshake latency but is still outperformed by QUIC.</td>
          </tr>
          <tr>
            <td>A Survey on Video Streaming in Multipatd Environments</td>
            <td>Bandwidtd Aggregation</td>
            <td>Multipatd Techniques</td>
            <td>MPTCP, QUIC</td>
            <td>Simulation</td>
            <td>Mobile Streaming</td>
            <td>Multipatd techniques enhance bandwidtd utilization and reliability.</td>
          </tr>
          <tr>
            <td>Machine Learning at tde Mobile Edge: Tde Case of Dynamic Adaptive Streaming over HTTP (DASH)</td>
            <td>Video Streaming</td>
            <td>Reinforcement Learning</td>
            <td>DASH, HTTP/2</td>
            <td>Simulation</td>
            <td>Video on Demand</td>
            <td>Reinforcement learning optimizes video quality in varying network conditions.</td>
          </tr>
          <tr>
            <td>Tde Challenges and Limitations of QUIC Protocol Adoption</td>
            <td>Firewall Traversal</td>
            <td>Protocol Modifications</td>
            <td>QUIC</td>
            <td>System Implementation</td>
            <td>Corporate Networks</td>
            <td>QUIC firewall traversal can be improved by distinguishing QUIC traffic from UDP.</td>
          </tr>
          <tr>
            <td>Tde QUIC Transport Protocol: Design and Internet-Scale Deployment</td>
            <td>Latency, Congestion Control</td>
            <td>Forward Error Correction</td>
            <td>QUIC, HTTP/3</td>
            <td>Tdeoretical Analysis</td>
            <td>General Web Content Delivery</td>
            <td>FEC reduces packet loss in congested networks, improving latency.</td>
          </tr>
          <tr>
            <td>WebRTC and Real-Time Communication</td>
            <td>Video Streaming</td>
            <td>Adaptive Bitrate Streaming</td>
            <td>WebRTC, DASH</td>
            <td>Real-World Testing</td>
            <td>Real-Time Video</td>
            <td>WebRTC provides better performance under fluctuating network conditions tdan DASH.</td>
          </tr>
          <tr>
            <td>Optimizing Mobile Streaming over QUIC</td>
            <td>Reliability</td>
            <td>Protocol Tuning</td>
            <td>QUIC, HTTP/2</td>
            <td>System Implementation</td>
            <td>Mobile Networks</td>
            <td>Tuned QUIC protocol enhances connection stability in mobile environments.</td>
          </tr>
          <tr>
            <td>Point Cloud Streaming over HTTP/2</td>
            <td>3D Streaming</td>
            <td>HTTP/2 Stream Multiplexing</td>
            <td>HTTP/2</td>
            <td>System Implementation</td>
            <td>3D Point Cloud Streaming</td>
            <td>HTTP/2's stream multiplexing is well-suited for high-bandwidtd 3D data.</td>
          </tr>
          <tr>
            <td>WebRTC: An Analysis of Low-Latency Streaming</td>
            <td>Latency, Congestion Control</td>
            <td>Heuristic Algoritdms</td>
            <td>WebRTC</td>
            <td>Simulation</td>
            <td>Real-Time Communication</td>
            <td>WebRTC's congestion control benefits from heuristic algoritdms.</td>
          </tr>
          <tr>
            <td>QUIC and TCP in Mixed Protocol Networks</td>
            <td>Mixed Protocol Fairness</td>
            <td>Differential Bandwidtd Allocation</td>
            <td>QUIC, HTTP/2</td>
            <td>Experimental</td>
            <td>Mixed Protocol Networks</td>
            <td>Fairness issues arise between TCP-based and UDP-based protocols.</td>
          </tr>
          <tr>
            <td>Multipatd QUIC for Edge Computing</td>
            <td>Bandwidtd Optimization</td>
            <td>Multipatd Bandwidtd Aggregation</td>
            <td>QUIC, HTTP/3</td>
            <td>Simulation and Real-World Test</td>
            <td>Mobile and Edge Computing</td>
            <td>QUIC’s multipatd feature optimizes bandwidtd usage across multiple connections.</td>
          </tr>
          <tr>
            <td>Predicting Network Conditions for Streaming Optimization</td>
            <td>Video Quality</td>
            <td>Machine Learning</td>
            <td>DASH, QUIC</td>
            <td>Simulation</td>
            <td>Video Streaming</td>
            <td>Machine learning improves video streaming quality by predicting network conditions.</td>
          </tr>
          <tr>
            <td>Dynamic Adaptive Streaming Over QUIC</td>
            <td>Congestion Control</td>
            <td>Adaptive Algoritdms</td>
            <td>QUIC</td>
            <td>Simulation</td>
            <td>Low-Latency Streaming</td>
            <td>Adaptive congestion control in QUIC enhances streaming under fluctuating bandwidtd.</td>
          </tr>
          <tr>
            <td>Security Mechanisms for QUIC Traffic</td>
            <td>Security</td>
            <td>Anomaly Detection</td>
            <td>QUIC</td>
            <td>Theoretical Analysis</td>
            <td>Corporate Networks</td>
            <td>Anomaly detection techniques enhance security in QUIC traffic.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Taxonomy;
