---
title: APKCOOK
---

## Laboratorio Unificado de Auditoría de Seguridad y Modificación de APKs Android

**APKCook** es una plataforma de código abierto desarrollada por **Abin Binoy** para auditoría de seguridad, ingeniería inversa e instrumentación dinámica de aplicaciones Android. Integra desensamblado estático con Apktool, heurística automatizada de vulnerabilidades, inyección dinámica de Frida Gadget, firma criptográfica y centro de comandos ADB en un entorno de escritorio nativo de alto rendimiento con .NET 8 y Avalonia UI.

---

### Módulos Principales

- **Motor de Descompilación Estática**: Desensamblado de código DEX a Smali, decodificación de `AndroidManifest.xml` y análisis de recursos.
- **Escáner de Seguridad Heurístico**: Detección de comprobaciones de root, huellas de emulador, credenciales hardcodeadas y componentes expuestos.
- **Instrumentación Dinámica con Frida**: Inyección automatizada de `frida-gadget.so` en librerías nativas para análisis en tiempo de ejecución.
- **Firma Criptográfica**: Compatible con esquemas v1, v2 y v3 con alineación zipalign de 4 bytes.
- **Centro de Control ADB**: Conexión directa para instalación rápida, captura de pantalla y streaming de logcat.

---

### Repositorio

- **GitHub**: [github.com/BROHUHA/APKCook](https://github.com/BROHUHA/APKCook)
- **Autor**: Abin Binoy
- **Licencia**: MIT License
