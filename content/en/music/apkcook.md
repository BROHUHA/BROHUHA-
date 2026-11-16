---
title: APKCOOK
---

## Unified Android Security Auditing & Dynamic Instrumentation Laboratory

**APKCook** is an open-source, full-stack Android application security auditing, reverse engineering, and dynamic instrumentation workbench engineered by **Abin Binoy**. It unifies static DEX bytecode disassembly, automated regex vulnerability heuristics, Frida runtime instrumentation gadget injection, multi-scheme cryptographic APK signing, and a live ADB device command center into a fast, native desktop environment.

---

### Core Security & Reverse Engineering Modules

The platform consolidates essential mobile penetration testing workflows into an integrated, interactive pipeline:

- **Static Decompilation Engine**: Powered by Apktool to disassemble DEX bytecode into readable Smali, decode `AndroidManifest.xml`, extract permissions, and parse binary XML resources with syntax-highlighted browsing.
- **Automated Vulnerability Scanner**: Scans Smali opcodes and manifest configurations against configurable regex heuristics to detect root-detection checks, emulator fingerprints, hardcoded API secrets, insecure trust managers, and exposed exported activities.
- **Frida Dynamic Instrumentation**: Automates gadget injection (`frida-gadget.so`) directly into native libraries (`lib/arm64-v8a`, `lib/armeabi-v7a`, `lib/x86_64`) and patches launch activities to enable live function hooking without needing a rooted device.
- **Cryptographic Signature Engine**: Integrates Uber-APK-Signer to execute v1, v2, and v3 Android signature schemes with automated debug keystore generation and 4-byte zipalign verification.
- **ADB Device Command Center**: Manages physical devices and emulators with real-time logcat streaming, interactive shell terminal, screen capture, frame buffer recording, and one-click package installation.

---

### System Architecture & Technical Specifications

- **Runtime & Language**: Built on **.NET 8** and **C# 12**, delivering asynchronous multi-threaded execution, memory safety, and cross-platform binary processing efficiency.
- **Desktop Interface**: Powered by **Avalonia UI 11**, providing hardware-accelerated, responsive desktop rendering with zero Electron memory bloat.
- **Architecture Support**: Comprehensive cross-platform support across Windows, macOS, and Linux, targeting `arm64-v8a`, `armeabi-v7a`, `x86`, and `x86_64` Android binaries.
- **Package Optimization**: Incorporates 4-byte zipalign optimization to minimize runtime RAM utilization when the re-engineered APK is executed on Android.

---

### Key Capabilities & Benchmarks

| Capability | Specification |
| :--- | :--- |
| **DEX / Smali Disassembly** | Automated multi-DEX decompilation via Apktool |
| **Frida Injection** | Automated ELF DT_NEEDED injection & Smali loader patching |
| **Signature Schemes** | Supports JAR (v1), APK Signature Scheme v2, and v3 |
| **Architecture Coverage** | arm64-v8a, armeabi-v7a, x86, x86_64 |
| **Desktop Performance** | Native GPU-accelerated UI (< 120MB baseline RAM) |
| **Device Integration** | High-throughput USB & Wireless ADB socket communication |

---

### Open Source Repository

- **GitHub Repository**: [github.com/BROHUHA/APKCook](https://github.com/BROHUHA/APKCook)
- **Author**: Abin Binoy
- **License**: MIT License
