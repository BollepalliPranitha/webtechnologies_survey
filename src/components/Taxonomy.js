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
            <th>The Performance and Future of QUIC Protocol</th>
            <th>Latency</th>
            <th>Optimization Theory</th>
            <th>QUIC</th>
            <th>Theoretical Analysis</th>
            <th>Web-based Browsing</th>
            <th>QUIC reduces significantly in high-latency networks.</th>
          </tr>
          <tr>
            <th>Hypertext Transfer Protocol Version 2 (HTTP/2)</th>
            <th>Latency</th>
            <th>Stream Multiplexing</th>
            <th>HTTP/2</th>
            <th>Simulation</th>
            <th>General Web Content Delivery</th>
            <th>HTTP/2 improves upon HTTP/1.1 through stream multiplexing.</th>
          </tr>
          <tr>
            <th>Assessing the Interplay Between WebRTC and QUIC Congestion Control Algorithms</th>
            <th>Congestion Control</th>
            <th>Control Theory</th>
            <th>WedRTC, QUIC</th>
            <th>Experimental</th>
            <th>Real-Time Video Streaming</th>
            <th>QUIC improves WebRTC performance in poor network conditions.</th>
          </tr>
          <tr>
            <th>Implementation and Analysis of Real-Time Streaming Protocols</th>
            <th>Real-Time Communication</th>
            <th>System Implementation</th>
            <th>WebRTC, RTSP</th>
            <th>Real-World Prototyping</th>
            <th>Video Conferencing</th>
            <th>WebRTC outperforms RTSP in mobile streaming environments.</th>
          </tr>
          <tr>
            <th>Robust QUIC-Based Signalling for WebRTC</th>
            <th>Reliability, Packet Loss</th>
            <th>Protocol Design</th>
            <th>WebRTC, QUIC</th>
            <th>Simulation and Real-World Test</th>
            <th>Peer-to-Peer Video Communication</th>
            <th>QUIC-based signaling improves WebRTC reliability.</th>
          </tr>
          <tr>
            <th>Cross-Protocol Unfairness Between Adaptive Streaming over HTTP/2 and QUIC</th>
            <th>Congestion Control, Fairness</th>
            <th>Mixed Traffic Optimization</th>
            <th>HTTP/2, QUIC</th>
            <th>Simulation</th>
            <th>Mixed Protocol Networks</th>
            <th>QUIC outperforms HTTP/2 in mixed-protocol environments</th>
          </tr>
          <tr>
            <th>Beyond QUIC v1: A First Look at Recent Transport Layer IETF Standardization Efforts</th>
            <th>Multipath Support</th>
            <th>Protocol Extension</th>
            <th>QUIC</th>
            <th>Simulation</th>
            <th>Multipath Streaming</th>
            <th>QUIC multipath extension improves reliability and bandwidth usage.</th>
          </tr>
          <tr>
            <th>TCP Fast Open</th>
            <th>Latency</th>
            <th>TCP Fast Open</th>
            <th>TCP, QUIC</th>
            <th>Theoretical Analysis</th>
            <th>General Web Browsing</th>
            <th>TCP Fast Open reduces handshake latency but is still outperformed by QUIC.</th>
          </tr>
          <tr>
            <th>A Survey on Video Streaming in Multipath Environments</th>
            <th>Bandwidth Aggregation</th>
            <th>Multipath Techniques</th>
            <th>MPTCP, QUIC</th>
            <th>Simulation</th>
            <th>Mobile Streaming</th>
            <th>Multipath techniques enhance bandwidth utilization and reliability.</th>
          </tr>
          <tr>
            <th>Machine Learning at the Mobile Edge: The Case of Dynamic Adaptive Streaming over HTTP (DASH)</th>
            <th>Video Streaming</th>
            <th>Reinforcement Learning</th>
            <th>DASH, HTTP/2</th>
            <th>Simulation</th>
            <th>Video on Demand</th>
            <th>Reinforcement learning optimizes video quality in varying network conditions.</th>
          </tr>
          <tr>
            <th>The Challenges and Limitations of QUIC Protocol Adoption</th>
            <th>Firewall Traversal</th>
            <th>Protocol Modifications</th>
            <th>QUIC</th>
            <th>System Implementation</th>
            <th>Corporate Networks</th>
            <th>QUIC firewall traversal can be improved by distinguishing QUIC traffic from UDP.</th>
          </tr>
          <tr>
            <th>The QUIC Transport Protocol: Design and Internet-Scale Deployment</th>
            <th>Latency, Congestion Control</th>
            <th>Forward Error Correction</th>
            <th>QUIC, HTTP/3</th>
            <th>Theoretical Analysis</th>
            <th>General Web Content Delivery</th>
            <th>FEC reduces packet loss in congested networks, improving latency.</th>
          </tr>
          <tr>
            <th>WebRTC and Real-Time Communication</th>
            <th>Video Streaming</th>
            <th>Adaptive Bitrate Streaming</th>
            <th>WebRTC, DASH</th>
            <th>Real-World Testing</th>
            <th>Real-Time Video</th>
            <th>WebRTC provides better performance under fluctuating network conditions than DASH.</th>
          </tr>
          <tr>
            <th>Optimizing Mobile Streaming over QUIC</th>
            <th>Reliability</th>
            <th>Protocol Tuning</th>
            <th>QUIC, HTTP/2</th>
            <th>System Implementation</th>
            <th>Mobile Networks</th>
            <th>Tuned QUIC protocol enhances connection stability in mobile environments.</th>
          </tr>
          <tr>
            <th>Point Cloud Streaming over HTTP/2</th>
            <th>3D Streaming</th>
            <th>HTTP/2 Stream Multiplexing</th>
            <th>HTTP/2</th>
            <th>System Implementation</th>
            <th>3D Point Cloud Streaming</th>
            <th>HTTP/2's stream multiplexing is well-suited for high-bandwidth 3D data.</th>
          </tr>
          <tr>
            <th>WebRTC: An Analysis of Low-Latency Streaming</th>
            <th>Latency, Congestion Control</th>
            <th>Heuristic Algorithms</th>
            <th>WebRTC</th>
            <th>Simulation</th>
            <th>Real-Time Communication</th>
            <th>WebRTC's congestion control benefits from heuristic algorithms.</th>
          </tr>
          <tr>
            <th>QUIC and TCP in Mixed Protocol Networks</th>
            <th>Mixed Protocol Fairness</th>
            <th>Differential Bandwidth Allocation</th>
            <th>QUIC, HTTP/2</th>
            <th>Experimental</th>
            <th>Mixed Protocol Networks</th>
            <th>Fairness issues arise between TCP-based and UDP-based protocols.</th>
          </tr>
          <tr>
            <th>Multipath QUIC for Edge Computing</th>
            <th>Bandwidth Optimization</th>
            <th>Multipath Bandwidth Aggregation</th>
            <th>QUIC, HTTP/3</th>
            <th>Simulation and Real-World Test</th>
            <th>Mobile and Edge Computing</th>
            <th>QUIC’s multipath feature optimizes bandwidth usage across multiple connections.</th>
          </tr>
          <tr>
            <th>Predicting Network Conditions for Streaming Optimization</th>
            <th>Video Quality</th>
            <th>Machine Learning</th>
            <th>DASH, QUIC</th>
            <th>Simulation</th>
            <th>Video Streaming</th>
            <th>Machine learning improves video streaming quality by predicting network conditions.</th>
          </tr>
          <tr>
            <th>Dynamic Adaptive Streaming Over QUIC</th>
            <th>Congestion Control</th>
            <th>Adaptive Algorithms</th>
            <th>QUIC</th>
            <th>Simulation</th>
            <th>Low-Latency Streaming</th>
            <th>Adaptive congestion control in QUIC enhances streaming under fluctuating bandwidth.</th>
          </tr>
          <tr>
            <th>Security Mechanisms for QUIC Traffic</th>
            <th>Security</th>
            <th>Anomaly Detection</th>
            <th>QUIC</th>
            <th>Theoretical Analysis</th>
            <th>Corporate Networks</th>
            <th>Anomaly detection techniques enhance security in QUIC traffic.</th>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Taxonomy;
