# iRacing Stint Tracker (Electron + TypeScript)

A desktop application built with **Electron** and **TypeScript** that connects to the **iRacing JavaScript SDK** and sends live race telemetry to the **iRacing Stint Tracker Backend**.

> **Work in Progress**: This app is currently being rewritten from the original Python version in JavaScript/TypeScript for easier distribution. Functionality is intended to match the Python app.

---

## Overview

The **iRacing Stint Tracker** desktop app monitors your iRacing sessions and forwards live telemetry to the backend.  

It connects to the **[iRacing JavaScript SDK](https://github.com/sajax/irsdkjs)** to capture telemetry data and sends it to the **[iRacing Stint Tracker Backend](https://github.com/Kamden-05/stint-tracker-server)** for storage and analysis.

**Key features:**
- Captures real-time telemetry from iRacing (laps, stints, pit stops, etc.).
- Automatically sends data to the backend API.
- Minimal GUI shows:
  - Connection status to the iRacing SDK
  - Connection status to the backend API
- Designed for personal use by a single team, with future plans for multi-team support.

---

## Tech Stack

| Component      | Technology |
|----------------|------------|
| Framework      | Electron |
| Language       | TypeScript |
| SDK            | [iRacing Node SDK](https://github.com/apihlaja/node-irsdk) |
| Backend        | [iRacing Stint Tracker Backend](https://github.com/Kamden-05/stint-tracker-server) |
