---
title: BT SCANNER
---

## Deep Learning Brain Tumor MRI Detection & Classification

**BT-Scanner** is an artificial intelligence-powered diagnostic imaging system engineered by **Abin Binoy**. It utilizes Deep Convolutional Neural Networks (CNNs) to analyze Brain Magnetic Resonance Imaging (MRI) scans, delivering rapid, highly accurate detection and pathological classification of intracranial tumors to assist healthcare professionals, radiologists, and researchers.

---

### Pathological Classes & Diagnostic Scope

The system evaluates T1-weighted, T2-weighted, and FLAIR-contrast MRI slices across axial, coronal, and sagittal planes, classifying scans into four distinct categories:

- **Glioma**: Infiltrative primary brain tumors developing from glial cells (astrocytomas, oligodendrogliomas, glioblastomas).
- **Meningioma**: Typically benign, slow-growing tumors arising from the meninges surrounding the cerebrum and spinal cord.
- **Pituitary Tumor**: Neoplasms originating in the pituitary fossa impacting endocrine and neuro-ophthalmic pathways.
- **No Tumor**: Healthy brain MRI scans confirmed negative for abnormal mass lesions or edema.

---

### Neural Network Architecture

- **Backbone Network**: Fine-tuned Transfer Learning architecture utilizing deep residual feature extractors (**ResNet50 / EfficientNet**).
- **Feature Extraction**: Multi-scale convolutional feature maps capturing subtle texture alterations, hyperintense boundaries, and mass-effect distortions.
- **Explainable AI (Grad-CAM)**: Integrates Gradient-weighted Class Activation Mapping to generate visual saliency heatmaps directly superimposed over the MRI scan, highlighting the exact spatial regions influencing the prediction.
- **Preprocessing & Augmentation Pipeline**:
  - Automated skull-stripping and brain tissue isolation using morphology filters.
  - Contrast Limited Adaptive Histogram Equalization (**CLAHE**) for micro-contrast enhancement.
  - Spatial normalization and real-time stochastic augmentation (rotations, zoom, flips, Gaussian blur) to ensure robust generalization across different MRI scanners (1.5T and 3.0T).

---

### Accuracy & Evaluation Metrics

Evaluated on extensive cross-validated test sets with rigorous statistical benchmarking:

| Metric | Score |
| :--- | :--- |
| **Classification Accuracy** | **98.4%** |
| **Sensitivity / Recall** | **98.7%** |
| **Specificity** | **98.2%** |
| **Precision (PPV)** | **98.1%** |
| **F1-Score** | **0.984** |
| **Area Under ROC Curve (AUC)** | **0.992** |
| **Inference Speed** | **< 120 ms** per scan (GPU) / ~450 ms (CPU) |

---

### Clinical & Technical Applications

- **Pre-Diagnostic Triage**: Accelerates radiologist workflow by prioritizing urgent high-risk scans with identified malignant masses.
- **Second-Opinion Decision Support**: Provides quantified probability distributions across tumor types with visual heatmap validation.
- **Research & Academic Benchmarking**: Serves as an open, reproducible framework for biomedical imaging and neural network explainability research.

---

### Open Source Repository

- **GitHub Repository**: [github.com/BROHUHA/BT-Scanner](https://github.com/BROHUHA/BT-Scanner)
- **Author**: Abin Binoy
- **License**: MIT License
