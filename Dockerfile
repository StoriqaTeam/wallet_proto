FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY . /usr/share/nginx/html
RUN rm -f \
  /usr/share/nginx/html/Dockerfile \
  /usr/share/nginx/html/20-svc-walletproof.yml \
  /usr/share/nginx/html/30-deploy-walletproof.yml \
  /usr/share/nginx/html/nginx.conf
