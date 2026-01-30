---
title: BSP-Net – Generating Compact Meshes via Binary Space Partitioning
tags: [paperitem, compsci/graphics, ml, compsci/algorithms/bsp, compsci/graphics/3d-reconstruction, ml/autoencoders]
alias: chenBSPNetGeneratingCompact2020
DOI: 10.48550/arXiv.1911.06971
Ref_Links: 
Status: paper/status/to-read
Priority: 🟡
Importance: 
Authors: [Zhiqin Chen, Andrea Tagliasacchi, Hao Zhang]
Year: 2020
Date_Added: 2023-01-24
Date_Read: 
Link: http://arxiv.org/abs/1911.06971
Zotero: zotero://select/library/items/3JMKPQZH
---

[[Papers MOC]]

## Abstract

Polygonal meshes are ubiquitous in the digital 3D domain, yet they have only played a minor role in the deep learning revolution. Leading methods for learning generative models of shapes rely on implicit functions, and generate meshes only after expensive iso-surfacing routines. To overcome these challenges, we are inspired by a classical spatial data structure from computer graphics, Binary Space Partitioning (BSP), to facilitate 3D learning. The core ingredient of BSP is an operation for recursive subdivision of space to obtain convex sets. By exploiting this property, we devise BSP-Net, a network that learns to represent a 3D shape via convex decomposition. Importantly, BSP-Net is unsupervised since no convex shape decompositions are needed for training. The network is trained to reconstruct a shape using a set of convexes obtained from a BSP-tree built on a set of planes. The convexes inferred by BSP-Net can be easily extracted to form a polygon mesh, without any need for iso-surfacing. The generated meshes are compact (i.e., low-poly) and well suited to represent sharp geometry; they are guaranteed to be watertight and can be easily parameterized. We also show that the reconstruction quality by BSP-Net is competitive with state-of-the-art methods while using much fewer primitives. Code is available at https://github.com/czq142857/BSP-NET-original.
## Notes  



%% Import Date: 2023-08-18T22:47:54.674-06:00 %%
