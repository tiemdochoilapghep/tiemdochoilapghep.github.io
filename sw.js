// Service worker tối giản để điện thoại cho phép cài app. Không lưu cache dữ liệu đơn hàng.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
