FROM alpine:3.7

# Download and install Hugo 0.20.4
RUN apk add --no-cache curl
RUN mkdir -p /tmp/hugo \
    && cd /tmp/hugo \
    && curl -L https://github.com/gohugoio/hugo/releases/download/v0.20.4/hugo_0.20.4_Linux-64bit.tar.gz -o hugo.tar.gz \
    && tar xzf hugo.tar.gz \
    && mv hugo /usr/local/bin/ \
    && cd / \
    && rm -rf /tmp/hugo

# Create working directory for Hugo sites
WORKDIR /site

# Expose default Hugo server port
EXPOSE 1313

# Default command (can be overridden)
CMD ["hugo", "server", "--bind", "0.0.0.0", "-D"]
