# Deployment Guide

## Prerequisites

- AWS CLI configured with appropriate permissions
- S3 bucket: `jonnyortiz.com`
- CloudFront distribution ID: `E1Q25HZMVZUWFR`

## Local Testing

Test changes before deployment:

```bash
# Clean previous build
rm -rf out/

# Build static export
npm run build

# Serve locally
npx serve out
```

## Production Deployment

1. Code Changes

```bash
git add .
git commit -m "feat/fix: description"
git push
```

2. Deploy to AWS

# Sync to S3

`aws s3 sync out/. s3://jonnyortiz.com --delete`

# Invalidate CloudFront cache

`aws cloudfront create-invalidation --distribution-id E1Q25HZMVZUWFR --paths "/*"`

## Rollback

If needed, revert to previous commit and redeploy:

```bash
git revert HEAD
git push
# Then repeat deployment steps
```
