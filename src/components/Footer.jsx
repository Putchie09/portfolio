
function Footer() {
  return (
    <footer
      className="py-8 border-t border-card-border"
      aria-label="Footer"
    >
      <div className="mx-auto max-w-container px-6 text-center">
        <p className="text-text-secondary/50 text-sm">
          © {new Date().getFullYear()} Yoel Putchie | Software Developer.
        </p>
      </div>
    </footer>
  )
}

export default Footer
