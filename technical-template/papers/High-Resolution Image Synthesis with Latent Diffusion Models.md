---
title: High-Resolution Image Synthesis with Latent Diffusion Models
tag: [paperitem]
alias: rombachHighResolutionImageSynthesis2022
---

[[Papers Management Centre]]

**Authors**:: Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, Björn Ommer
**Year**:: 2022
**Date_Added**:: 2022-12-20
**Date_Read**:: 2023-01-10
**Link**:: http://arxiv.org/abs/2112.10752
**DOI**:: 10.48550/arXiv.2112.10752
**Ref_Links**:: 
**Status**::  #paper/status/read
**Priority**:: 
**Importance**:: 🏛️
**Tags**:: #ml, #ml/autoencoders, #ml/diffusion, #ml/generative
**Zotero**:: [Rombach2022-High-Resolution Image Synthesis with Latent Diffusion Models.pdf](zotero://select/library/items/VJIMEWFA)

## Abstract

By decomposing the image formation process into a sequential application of denoising autoencoders, diffusion models (DMs) achieve state-of-the-art synthesis results on image data and beyond. Additionally, their formulation allows for a guiding mechanism to control the image generation process without retraining. However, since these models typically operate directly in pixel space, optimization of powerful DMs often consumes hundreds of GPU days and inference is expensive due to sequential evaluations. To enable DM training on limited computational resources while retaining their quality and flexibility, we apply them in the latent space of powerful pretrained autoencoders. In contrast to previous work, training diffusion models on such a representation allows for the first time to reach a near-optimal point between complexity reduction and detail preservation, greatly boosting visual fidelity. By introducing cross-attention layers into the model architecture, we turn diffusion models into powerful and flexible generators for general conditioning inputs such as text or bounding boxes and high-resolution synthesis becomes possible in a convolutional manner. Our latent diffusion models (LDMs) achieve a new state of the art for image inpainting and highly competitive performance on various tasks, including unconditional image generation, semantic scene synthesis, and super-resolution, while significantly reducing computational requirements compared to pixel-based DMs. Code is available at https://github.com/CompVis/latent-diffusion .
## Notes  

> "_Recently, diffusion models [82], which are built from a hierarchy of denoising autoencoders, have shown to achieve impressive_"
		> [Page 1](zotero://open-pdf/library/items/VJIMEWFA?page=1&annotation=GYHP34H7)

	
> "_results in image synthesis_"
		> [Page 1](zotero://open-pdf/library/items/VJIMEWFA?page=1&annotation=ETCD68ZX)

	
> "_DMs are still computationally demanding, since training and evaluating such a model requires repeated function evaluations (and gradient computations) in the high-dimensional space of RGB images_"
		> [Page 1](zotero://open-pdf/library/items/VJIMEWFA?page=1&annotation=45Q4SVMU)

	
> "_As with any likelihood-based model, learning can be roughly divided into two stages: First is a perceptual compression stage which removes high-frequency details but still learns little semantic variation. In the second stage, the actual generative model learns the semantic and conceptual composition of the data (semantic compression)._"
		> [Page 2](zotero://open-pdf/library/items/VJIMEWFA?page=2&annotation=XQ9FFEVH)

	
> "_First, we train an autoencoder which provides a lower-dimensional (and thereby efficient) representational space which is perceptually equivalent to the data space._"
		> [Page 2](zotero://open-pdf/library/items/VJIMEWFA?page=2&annotation=KUQE8F4P)

	
> "_The reduced complexity also provides efficient image generation from the latent space with a single network pass. We dub the resulting model class Latent Diffusion Models (LDMs)._"
		> [Page 2](zotero://open-pdf/library/items/VJIMEWFA?page=2&annotation=WDRZ8UV7)

	
> "_enerative Adversarial Networks (GAN) [27] allow for efficient sampling of high resolution images with good perceptual quality [3, 42], but are diffi-_"
		> [Page 2](zotero://open-pdf/library/items/VJIMEWFA?page=2&annotation=VUMAR26L)

	
> "_cult to optimize [2, 28, 54] and struggle to capture the full data distribution [55]._"
		> [Page 3](zotero://open-pdf/library/items/VJIMEWFA?page=3&annotation=HA5TLSMF)

	
> "_Variational autoencoders (VAE) [46] and flow-based models [18, 19] enable efficient synthesis of high resolution images [9, 44, 92], but sample quality is not on par with GANs._"
		> [Page 3](zotero://open-pdf/library/items/VJIMEWFA?page=3&annotation=MJA5CJ9D)

	
> "_autoregressive models (ARM) [6, 10, 94, 95] achieve strong performance in density estimation, computationally demanding architectures [97] and a sequential sampling process limit them to low resolution images._"
		> [Page 3](zotero://open-pdf/library/items/VJIMEWFA?page=3&annotation=NDBWVWB2)

	
> "_Diffusion Probabilistic Models (DM) [82], have achieved state-of-the-art results in density estimation [45] as well as in sample quality [15]_"
		> [Page 3](zotero://open-pdf/library/items/VJIMEWFA?page=3&annotation=E6UCPRNN)

	
> "_Evaluating and optimizing these models in pixel space, however, has the downside of low inference speed and very high training costs_"
		> [Page 3](zotero://open-pdf/library/items/VJIMEWFA?page=3&annotation=M7TMW83U)

	
> "_VQ-VAEs [67, 101] use autoregressive models to learn an expressive prior over a discretized latent space._"
		> [Page 3](zotero://open-pdf/library/items/VJIMEWFA?page=3&annotation=QANSQISZ)

	
![[img/papers/rombachHighResolutionImageSynthesis2022/NF39C8NW.png]]

	


%% Import Date: 2023-02-25T23:25:47.929-07:00 %%
