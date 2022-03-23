import React from 'react';
import ReactDOM from 'react-dom';

import ToastContainer from './ToastContainer';
import Toast from './Toast';

import { CToast, CTReturn } from './index.d';

let ctToastCount = 0;

const cogoToast: CToast = (text, options?) => {
	let rootContainer = document.getElementById(options?.toastContainerID || 'ct-container');

	if (!rootContainer) {
		rootContainer = document.createElement('div');
		rootContainer.id = 'ct-container';
		document.body.appendChild(rootContainer);
	}

	ctToastCount += 1;

	const hideAfter = (options?.hideAfter === undefined ? 3000 : options.hideAfter);
	
	const toast = { id: ctToastCount, text, ...options ,hideAfter};

	ReactDOM.render(<ToastContainer toast={toast} />, rootContainer);

	const hide = () => {
		ReactDOM.render(<ToastContainer hiddenID={toast.id} />, rootContainer);
	};

	const completePromise: CTReturn = new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve();
		}, hideAfter);
	});

	completePromise.hide = hide;

	return completePromise;
};

cogoToast.success = (t, o) => cogoToast(t, { ...o, type: 'success' });
cogoToast.warn = (t, o) => cogoToast(t, { ...o, type: 'warn' });
cogoToast.info = (t, o) => cogoToast(t, { ...o, type: 'info' });
cogoToast.error = (t, o) => cogoToast(t, { ...o, type: 'error' });
cogoToast.loading = (t, o) => cogoToast(t, { ...o, type: 'loading' });

export { Toast };

export default cogoToast;
