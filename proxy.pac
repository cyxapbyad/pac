function FindProxyForURL(url, host) {
  // Массив целевых доменов
  var proxyDomains = [
    "youtube.com",
    "xhamster.com",
    "chatgpt.com"
  ];

  // Адрес SOCKS5-прокси
  var proxy = "SOCKS5 127.0.0.1:2080";

  // Пробегаем по списку и проверяем совпадение
  for (var i = 0; i < proxyDomains.length; i++) {
    var domain = proxyDomains[i];
    // Совпадение для корневого домена или любого поддомена
    if (dnsDomainIs(host, domain) || shExpMatch(host, "*." + domain)) {
      return proxy;
    }
  }

  // Всё остальное — напрямую
  return "DIRECT";
}
