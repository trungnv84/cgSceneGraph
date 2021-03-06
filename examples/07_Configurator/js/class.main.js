/*
 * Copyright (c) 2012  Capgemini Technology Services (hereinafter “Capgemini”)
 *
 * License/Terms of Use
 *
 * Permission is hereby granted, free of charge and for the term of intellectual property rights on the Software, to any
 * person obtaining a copy of this software and associated documentation files (the "Software"), to use, copy, modify
 * and propagate free of charge, anywhere in the world, all or part of the Software subject to the following mandatory conditions:
 *
 *   •	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 *  Any failure to comply with the above shall automatically terminate the license and be construed as a breach of these
 *  Terms of Use causing significant harm to Capgemini.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 *  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 *  OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 *  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  Except as contained in this notice, the name of Capgemini shall not be used in advertising or otherwise to promote
 *  the use or other dealings in this Software without prior written authorization from Capgemini.
 *
 *  These Terms of Use are subject to French law.
 */
var CGMain = CGSGScene.extend(
	{
		initialize: function (canvas) {
			this._super(canvas);

			this.basket = new Basket();

			this.initializeCanvas();
			this.createScene();

			this.startPlaying();
		},

		initializeCanvas: function () {
			this.viewDimension = cgsgGetRealViewportDimension();
			this.setCanvasDimension(this.viewDimension);

			FLOOR_POSITION = cgsgCanvas.height - (MENU_HEIGHT + FLOOR_POSITION_FROM_BOTTOM);
			FLOOR_PERCENT = Math.max(0.0, FLOOR_POSITION / cgsgCanvas.height);
		},

		createScene: function () {
			this.rootNode = new CGSGNode(0, 0, 0, 0);
			this.sceneGraph.addNode(this.rootNode, null);

			this.backgroundNode = new BackgroundNode(0, 0, cgsgCanvas.width, cgsgCanvas.height);
			this.rootNode.addChild(this.backgroundNode);

			this.menuNode = new MenuNode(0, cgsgCanvas.width);
			this.rootNode.addChild(this.menuNode);

			this.img = new Image();
			this.img.onload = this.onImageLoaded.bind(this);
			this.img.src = "images/board.png";
		},

		/**
		 * Fired when the image loading is complete.
		 * Set the image object (img) to our image nodes
		 */
		onImageLoaded: function () {
			this.menuNode.setImage(this.img);
		}

	}
);
