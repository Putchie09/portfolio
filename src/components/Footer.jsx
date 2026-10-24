
function Footer() {
  return (
    <footer
      className="py-12 border-t border-card-border"
      aria-label="Footer"
    >
      <div className="mx-auto max-w-container px-6 text-center">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Yoel Putchie | Software Developer.
        </p>
      </div>
    </footer>
  )
}

export default Footer
