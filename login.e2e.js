describe('Google search', () => {
  it('should open Google and check title', async () => {
    await browser.url('https://www.google.com')

    const title = await browser.getTitle()
    expect(title).toContain('Google')
  })
})